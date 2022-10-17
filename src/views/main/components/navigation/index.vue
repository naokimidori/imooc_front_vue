<template>
  <mobile-navigation v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
</script>
<style lang="scss" scoped></style>
