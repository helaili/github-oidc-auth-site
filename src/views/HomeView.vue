<script setup lang="ts">
import Welcome from '../components/WelcomeList.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ 
  mounted() {
    let code = this.$route.query.code?.toString() || ''
    
    if (code !== '') {  
      // Because of how the router works, a direct call from the outside to /success will not work.
      // We need to hit the index.html page, which loads the router, so that /success can be resolved.
      this.$router.push({ path: '/success', query: { code: code } })
    }
  }
})
</script>

<template>
  <main>
    <Welcome />
  </main>
</template>
