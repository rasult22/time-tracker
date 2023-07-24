<script setup lang="ts">
import {kNavbar, kPage, kLink} from 'konsta/vue'

const size = 'Default'
</script>

<template>
  <k-page>
    <k-navbar
      title="Navbar"
      subtitle="Subtitle"
      class="top-0 sticky"
      :transparent="true"
    >
      <template #right>
        <k-link navbar>
          Right
        </k-link>
      </template>
    </k-navbar>
  </k-page>
</template>
