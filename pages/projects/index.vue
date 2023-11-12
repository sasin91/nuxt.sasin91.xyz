<template>
  <article className="container mx-auto pt-14">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        {{ t("projects.title") }}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {{ t("projects.description") }}
      </p>
    </div>
    <ul
      className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <li>
        <NuxtLink :to="localePath('/projects/game')">
          <NuxtImg
            className="relative z-10 aspect-[3/2] w-full rounded-2xl object-cover"
            width="400"
            height="400"
            src="/tyler-van-der-hoeven-_ok8uVzL2gI-unsplash.jpg"
            alt="random image"
          />
          <h3
            className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"
          >
            {{ t("projects.game.title") }}
          </h3>
          <picture className="text-base leading-7 text-gray-600">✨</picture>
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from "#imports";

const { t } = useI18n();
const localePath = useLocalePath();
</script>
