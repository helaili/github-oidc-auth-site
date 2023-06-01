<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import ContributeIcon from "./icons/IconContribute.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
    For the time being, the best documentation sits on the
    <a href="https://github.com/helaili/github-oidc-auth-app" target="_blank" rel="noopener">GitHub App</a> repository.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question through a GitHub Issue on the
    <a
      href="https://github.com/helaili/github-oidc-auth-app"
      target="_blank"
      rel="noopener"
      >GitHub App</a
    >
    repository or the
    <a href="https://github.com/helaili/github-oidc-auth" target="_blank" rel="noopener"
      >the GitHub Action</a
    >
    repository.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ContributeIcon />
    </template>
    <template #heading>Contribute</template>
    Happy to receive any contribution to the
    <a
      href="https://github.com/helaili/github-oidc-auth-app"
      target="_blank"
      rel="noopener"
      >GitHub App</a
    >,
    <a href="https://github.com/helaili/github-oidc-auth" target="_blank" rel="noopener"
      >the GitHub Action</a
    >, or
    <a
      href="https://github.com/helaili/github-oidc-auth-site"
      target="_blank"
      rel="noopener"
      >this website</a
    >. Just head to the right repo and open a Pull Request.
  </WelcomeItem>
  <!--
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
  -->
</template>
