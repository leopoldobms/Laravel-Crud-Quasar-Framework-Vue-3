<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar class="bg-indigo-8">
        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { useAuthStore } from 'src/stores/auth'

export default defineComponent({
  name: 'AuthLayout',

  setup () {
    const authStore = useAuthStore()
    return {
      authStore,
      defineComponent
    }
  }
})
</script>

<style></style>
