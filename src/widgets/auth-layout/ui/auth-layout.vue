<template>
    <authHeader />
    <div class="auth-page">
        <router-view />
    </div>
</template>

<script setup lang="ts">
import AuthHeader from './auth-header.vue';
</script>   

<style lang="scss">
.auth-page {
    width: 400px;
    margin: 0 auto;
}
</style>