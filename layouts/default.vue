<template>
  <!-- Header -->
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink :to="localePath('/')" class="-m-1.5 p-1.5">
          <span class="sr-only">{{ appConfig.title }}</span>
          <ApplicationLogo class="w-auto h-8" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">{{ t("menus.main.open") }}</span>
          <Bars3Icon class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NavLink v-for="link in navigation" :key="link.name" :href="link.href">
          {{ link.name }}
        </NavLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <Dropdown align="right" width="48">
          <template #trigger>
            <span class="inline-flex rounded-md">
              <button
                type="button"
                class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition-all duration-300 ease-in-out text-cyan-500 group"
              >
                {{ locale }}

                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </template>

          <template #content>
            <template v-for="lang in availableLocales">
              <button
                v-if="lang === locale"
                disabled
                key="current-lang"
                class="block w-full px-4 py-2 text-sm leading-5 text-left"
              >
                <span class="text-cyan-200">
                  {{ lang }}
                </span>
              </button>
              <NuxtLink
                as="button"
                v-else
                :key="lang"
                :to="switchLocalePath(lang)"
                class="block w-full px-4 py-2 text-sm leading-5 text-left transition-all duration-300 ease-in-out group"
              >
                <span
                  class="text-cyan-500 group-hover:text-indigo-600 bg-left-bottom bg-gradient-to-r from-indigo-200 via-violet-400 to-cyan-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  {{ lang }}
                </span>
              </NuxtLink>
            </template>
          </template>
        </Dropdown>
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a :href="localePath('/')" class="-m-1.5 p-1.5">
            <span class="sr-only">{{ appConfig.title }}</span>
            <ApplicationLogo class="w-auto h-8" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">{{ t("menus.main.close") }}</span>
            <XMarkIcon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="flow-root mt-6">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="py-6 space-y-2">
              <ResponsiveNavLink
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
              >
                {{ t(`navigation.global.${item.name}`) }}
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <main class="isolate">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="mt-32 sm:mt-40" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="px-6 pb-8 mx-auto max-w-7xl lg:px-8">
      <div
        class="pt-8 mt-16 border-t border-gray-900/10 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24"
      >
        <p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
          &copy; {{ new Date().getFullYear() }} {{ appConfig.domain }}.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath, useSwitchLocalePath } from "#imports";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { computed, ref } from "vue";
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const appConfig = useAppConfig();
const navigation = computed(() => [
  {
    name: t("navigation.global.blog"),
    href: localePath("blog"),
  },
  {
    name: t("navigation.global.projects"),
    href: localePath("projects"),
  },
]);

const mobileMenuOpen = ref(false);

const { t, locale, availableLocales } = useI18n();
</script>
