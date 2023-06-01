<script setup lang="ts">
import DeployIcon from "../components/icons/IconDeploy.vue"
import WelcomeItem from "../components/WelcomeItem.vue"
</script>

<script lang="ts">
import { defineComponent } from 'vue'

interface GitHubAppManifest {
  name: string,
  hook_attributes: {
    url: string
  },
  redirect_url: string,
  public: boolean, 
  default_permissions: Map<string, string>, 
  default_events: string[], 
}

export default defineComponent({
  data() {
    return {
      orgName: '',
      errors: new Array<string>(),
    }
  }, 
  methods: {
    random(length = 8) {
      let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let str = ''

      for (let i = 0; i < length; i++) {
          str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return str;
    },
    checkForm(e: Event) {
      this.errors = []
      if (this.orgName === '') {
        this.errors.push('Please enter an organisation name')
      } else {
        let manifest = {
          name: `GitHub OIDC Auth for ${this.orgName}`,
          hook_attributes: {
            url: ''
          },
          redirect_url: ' github-oidc-auth-site.ngrok.dev/deploy',
          public: false, 
          default_permissions: {'contents': 'read', 'metadata': 'read'}, 
          default_events: ['push'], 
        } as GitHubAppManifest

        manifest.default_permissions.set('contents', 'read')
        manifest.default_permissions.set('metadata', 'read')

        return true
      }
      e.preventDefault()
    }
  }, 
  computed: {
    action() {
      let randomState = this.random()
      let action = `https://github.com/organizations/${this.orgName}/settings/apps/new?state=${randomState}`
      return action
    }
  }
})

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DeployIcon />
    </template>
    <template #heading>Deploy</template>
    <p>You need to run your own instance of this app in order to use it. This means you need to:
    <ul>
      <li>Create a new GitHub app using the button below</li>  
      <li>Deploy this app somewhere</li>
    </ul>
    </p>

    <form @submit.prevent="checkForm" :action="action" method="post">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-bind:key="error" v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <p>GitHub Organisation:</p>
      <p><input type="text" v-model="orgName"></p>
      
        <button type="submit">
          Create GitHub App
      </button>
    </form>
  </WelcomeItem>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

form {
  border-width: 1px;
  border-color: #f0f1f3;
  border-style: solid;
  border-radius: 10px;
  padding: 10px;
  padding-left: 30px;
  padding-bottom: 20px;
}

p {
  margin-bottom: 1rem;
}

form > p {
  margin-bottom: 0rem;
}

ul {
  margin-top: 1rem;
}

.error {
  color: red;
}

.error li {
  margin-top: 0.5rem;
}
</style>
