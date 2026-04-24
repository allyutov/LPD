<template>
    <header class="auth-header">
        <ul class="auth-header__nav">
            <li class="auth-header__item">
                <app-link :to="routeToLogin">Login</app-link>
            </li>
            <li class="auth-header__item">
                <app-link :to="routeToRegistration">Registration</app-link>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">
import { AUTH_ROUTES } from '@/entities/auth';
import { appLink } from '@/shared/components';
import { computed } from 'vue';

const routeToLogin = computed(() => AUTH_ROUTES.LOGIN);

const routeToRegistration = computed(() => AUTH_ROUTES.REGISTRATION);
</script>

<style scoped lang="scss">
.auth-header {
    display: grid;
    justify-items: center;
    align-items: center; 
    padding: 15px;

    &__nav {
        display: flex;
        gap: 10px;
    }
}
</style>