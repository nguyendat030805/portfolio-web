<script setup lang="ts">
import { reactive } from 'vue';
import { useAuth } from '../composables/useAuth';
import AuthInput from '../components/AuthInput.vue';
import AuthButton from '../components/AuthButton.vue';

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const { register, isLoading, error } = useAuth();

const onRegisterSubmit = () => register(form);
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-extrabold">Register</h1>
      </div>

      <form @submit.prevent="onRegisterSubmit" class="space-y-4">
        <AuthInput label="Full Name" v-model="form.name" placeholder="Nguyễn Văn A" />
        <AuthInput label="Email" v-model="form.email" type="email" placeholder="name@example.com" />
        <AuthInput label="Password" v-model="form.password" type="password" placeholder="Passwords must be at least 8 characters long." />
        <AuthInput label="Confirm Password" v-model="form.password_confirmation" type="password" />

        <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>

        <AuthButton :is-loading="isLoading" text="Register Now" />
      </form>

      <p class="mt-8 text-center text-sm text-slate-600">
        Do you already have an account?
        <router-link to="/login" class="text-[#F59E0B] font-bold hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>