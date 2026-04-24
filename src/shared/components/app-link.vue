<template>
    <router-link 
        v-if="to"
        class="app-link"
        active-class="active" 
        :to="to">
      <slot />
    </router-link>
  
    <a 
        v-else 
        class="app-link"
        :href="href" 
        target="_blank">
      <slot />
    </a>
</template>
  
<script setup lang="ts">
    defineProps<{
        to?: string,
        href?: string,
    }>();
</script>

<style scoped lang="scss">
    .app-link {
        text-decoration: none;
        color: #3b82f6;

        &:hover {
            color: #2563eb;
        }

        &.active {
            color: #1d4ed8;
        }
    }
</style>