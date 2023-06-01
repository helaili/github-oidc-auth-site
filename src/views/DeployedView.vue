<script setup lang="ts">
import SuccessIcon from "../components/icons/IconSuccess.vue"
import WelcomeItem from "../components/WelcomeItem.vue"
</script>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      app_id: '',
      webhook_secret: '',
      pem: '', 
      html_url: '',
      settingsPage: ''
    }
  }, 
  mounted() {
    let code = this.$route.query.code?.toString() || ''
    console.log(`code is ${code}`)
    
    if (code !== '') {  
      axios.post(`https://api.github.com/app-manifests/${code}/conversions`).then(({data}) => {
        console.log(data)
        this.app_id = data.id
        this.webhook_secret = data.webhook_secret
        this.pem = data.pem
        this.html_url = data.html_url
        this.settingsPage = `https://github.com/organizations/${data.owner.login}/settings/apps/${data.slug}`
      })
    }
  }
})
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <SuccessIcon />
    </template>
    <template #heading>Success</template>
    <p>You've succesfully deployed the OIDC Auth for GitHub app to your organisation. 
    You can now install it onto your repositories by visiting the <a :href="html_url">app page</a> and clicking the <strong>Install</strong> button. 
    You can also revivew the parameters on the <a :href="settingsPage">settings page</a>.</p>
    <p>Save the parameters below and use them as environment variables for your application runtime.</p>
    <div>
      <ul>
        <li><label>App ID: </label><code>{{ app_id }}</code></li>
        <li><label>Webhook Secret: </label><code>{{ webhook_secret }}</code></li>
        <li><label>Private Key: </label><code>{{ pem }}</code></li>
      </ul>
    </div>
  </WelcomeItem>
</template>

<style>
p {
  margin-bottom: 1rem;
}
</style>
