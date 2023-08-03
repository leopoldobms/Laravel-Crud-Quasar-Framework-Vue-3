<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated fixed>
      <q-toolbar class="bg-indigo-8">
        <q-toolbar-title>
        </q-toolbar-title>
        <q-btn-dropdown flat color="white" :label="authStore.getUserName" icon="person">
        <q-list>
          <q-item clickable v-close-popup @click="authStore.handleLogout">
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
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
      name,
      defineComponent
    }
  }
})
</script>

<style></style>
