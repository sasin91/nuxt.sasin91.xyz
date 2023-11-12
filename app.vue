<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { domain } = useAppConfig();
const { t, locale } = useI18n();
const title = t("app.title");
const description = t("app.description");

useHead({
  title,
  htmlAttrs: {
    lang: locale,
  },
  meta: [
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:site:name",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:url",
      content: domain,
    },
  ],
  bodyAttrs: {
    class: 'to-magenta-100/20 isolate bg-gradient-to-br from-white via-cyan-100/5 antialiased'
  }
});
</script>
