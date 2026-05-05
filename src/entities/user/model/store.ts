import { defineStore } from 'pinia';
import type { User, AuthState } from '../types';

export const useUserStore = defineStore('user', {
  state: (): AuthState => ({
    user: null,
    token: null
  }),

  getters: {
    isAuth: (state) => !!state.user,
    isAdmin: (state) => state.user?.role === 'admin'
  },

  actions: {
    setUser(payload: { user: User; accessToken: string }) {
      this.user = payload.user;
      this.token = payload.accessToken;

      localStorage.setItem('user', JSON.stringify(payload.user));
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    },

    initFromStorage() {
      const token = localStorage.getItem('token');

      if (token) {
        this.token = token;
      }
    }
  }
});