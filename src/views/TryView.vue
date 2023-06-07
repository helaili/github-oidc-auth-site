<script setup lang="ts">
import ExperimentIcon from "../components/icons/IconExperiment.vue";
import WelcomeItem from "../components/WelcomeItem.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ExperimentIcon />
    </template>
    <template #heading>Giving it a try</template>
    <p>You might want to give this app and action a try without going through the hassle of
    creating a new GitHub app and deploying it somewhere. Make sense, so I created a
    sandbox for you. This is a sandbox, there is no SLA coming with this and as I am
    running it, it really means that you are trusting me with your GitHub token. I am not
    going to do anything bad with it, but you should not use this for anything serious. In
    order to limit any problem, no organisation permission are granted to this app
    instance. The only repository permissions granted are:
    <ul>
      <li>adminstration: <code>read</code></li>
      <li>contents: <code>write</code></li>
      <li>issues: <code>write</code></li>
    </ul>
    </p>
    <p>In order to use this sandbox, you will need to:
    <ul>
      <li>Create a file named <code>oidc_entitlements.json</code> in the <code>.github-private</code> repository of your organisation as explained <a href="https://github.com/helaili/github-oidc-auth-app/blob/main/README.md#create-a-configuration-file" target="_blank" rel="noopener">here.</a></li>
      <li>Install the app on your organisation by clicking <a href="https://github.com/apps/oidc-auth-for-github-sandbox" target="_blank" rel="noopener">here</a>. Make sure you grant the app access to at least the <code>.github-private</code> repository and whichever other one within this organisation that you will want to access using the token.</li>
      <li>Create a workflow that uses the action <code>helaili/github-oidc-auth</code> as shown <a href="https://github.com/helaili/github-oidc-auth/blob/main/README.md#giving-it-a-try" target="_blank" rel="noopener">here</a>.</li>
    </ul>
    </p>
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

p {
  margin-bottom: 1rem;
}

ul {
  margin-top: 1rem;
}
</style>
