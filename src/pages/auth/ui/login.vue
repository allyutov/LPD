<template>
  <n-form ref="formRef" :model="modelRef" :rules="loginRules">
    <n-form-item path="email" label="E-mail">
      <n-input v-model:value="modelRef.email" @keydown.enter.prevent />
    </n-form-item>
    <n-form-item path="password" label="Password">
      <n-input
          v-model:value="modelRef.password"
          type="password"
          show-password-on="click"
          @keydown.enter.prevent
      />
    </n-form-item>
    <div style="display: flex; justify-content: flex-end">
      <n-button
          round
          type="primary"
          @click="submit"
      >
        Log in
      </n-button>
    </div>
  </n-form>
</template>

<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton } from 'naive-ui';
import { ref } from 'vue';
import { loginRules } from '@/features/auth';
import { login } from '@/shared/api';
import { useUserStore } from '@/entities/user';
import { useRouter } from 'vue-router';

interface LoginModelType {
  email: string,
  password: string;
}

const userStore = useUserStore();

const router = useRouter();

const modelRef = ref<LoginModelType>({
  email: '',
  password: '',
});

const submit = async () => {
  try {
    const data = await login(modelRef.value.email, modelRef.value.password);

    userStore.setUser(data);

    await router.push('/dashboard');
  } catch (e) {
    console.log(e);
  }
};
</script>

<style scoped>

</style>