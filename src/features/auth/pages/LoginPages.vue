<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import AuthInput from '../components/AuthInput.vue';
import AuthButton from '../components/AuthButton.vue';
import SocialLogin from '../components/SocialLogin.vue';

const email = ref('');
const password = ref('');
const { handleGoogleLogin, login, isLoading, error } = useAuth();

const onLoginSubmit = () => {
  login({ email: email.value, password: password.value });
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div class="p-8 pb-4"> <div class="text-center mb-10">
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Login</h1>
          <p class="text-slate-500 mt-2 text-sm">Welcome back to Portfolio</p>
        </div>

        <form @submit.prevent="onLoginSubmit" class="space-y-5">
          <AuthInput label="Email" v-model="email" type="email" placeholder="name@gmail.com" />
          <AuthInput label="Password" v-model="password" type="password" placeholder="••••••••" />
          <AuthButton text="Log in now" :is-loading="isLoading" color-class="bg-blue-600 hover:bg-blue-700 shadow-blue-200" />
        </form>

        <div class="relative my-8">
          <div class="absolute inset-0 flex items-center"><span class="w-full border-t border-slate-200"></span></div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="px-3 bg-white text-slate-400 tracking-widest font-medium">Or</span>
          </div>
        </div>

        <SocialLogin 
          :is-loading="isLoading" 
          @click="handleGoogleLogin" 
        />

        <p class="mt-6 text-center text-sm text-slate-600">
         Don't have an account yet? 
          <router-link to="/register" class="text-[#F59E0B] font-bold hover:underline underline-offset-4">Register for free</router-link>
        </p>
      </div>

      <div v-if="error" class="bg-red-50 p-4 border-t border-red-100 flex items-center gap-3">
        <span class="text-red-500 text-sm font-medium ">{{ error }}</span>
      </div>
    </div>
  </div>
</template>

