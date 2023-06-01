<script setup lang="ts">
import SuccessIcon from "../components/icons/IconSuccess.vue"
import WelcomeItem from "../components/WelcomeItem.vue"
</script>

<script lang="ts">
import { defineComponent } from 'vue'

interface GitHubAppManifest {
  name: string,
  url: string, 
  hook_attributes: {
    url: string
  },
  redirect_url: string,
  public: boolean, 
  default_permissions: {
    contents: string, 
    metadata: string
  }
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
    checkForm(e : Event) {
      this.errors = []
      if (this.orgName === '') {
        this.errors.push('Please enter an organisation name')
        e.preventDefault()
      } else {
        return true
      }
    }
  }, 
  computed: {
    action() {
      let randomState = this.random()
      let action = `https://github.com/organizations/${this.orgName}/settings/apps/new?state=${randomState}`
      return action
    }, 
    manifest() {  
      let manifest = {
        name: `OIDC Auth for GitHub on ${this.orgName}`,
        url: 'https://github-oidc-auth-site.github.io',
        hook_attributes: {
          url: 'https://github-oidc-auth-site.ngrok.dev/webhook'
        },
        redirect_url: 'https://github-oidc-auth-site.ngrok.dev/deployed',
        public: false, 
        default_permissions: {
          contents: 'read', 
          metadata: 'read'
        }, 
        default_events: ['push'], 
      } as GitHubAppManifest

      return JSON.stringify(manifest)
    }
  }
})

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <SuccessIcon />
    </template>
    <template #heading>Deploy</template>
    <p>You need to run your own instance of this app in order to use it. This means you need to:
    <ul>
      <li>Create a new GitHub app using the button below</li>  
      <li>Deploy this app somewhere</li>
    </ul>
    </p>

    <form @submit="checkForm" :action="action" method="post">
      <input type="hidden" name="manifest" v-model="manifest">
      <p class="error" v-if="errors.length">
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

.error ul {
  margin-top: 0rem;
}
</style>
