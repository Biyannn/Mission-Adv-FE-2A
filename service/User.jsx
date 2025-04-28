import axios from "axios";
import { create } from "zustand";

// Ganti URL berikut dengan endpoint MockAPI milik Anda (resource 'users')
const baseURL = "https://67f14ef3c733555e24acca22.mockapi.io/User";

// Store untuk autentikasi dan user management menggunakan zustand
export const useAuthStore = create((set, get) => ({
  users: [],
  currentUser: null,
  loading: false,
  error: null,

  // Fetch semua user
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(baseURL);
      set({ users: response.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // Register (Create)
  register: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(baseURL, data);
      set((state) => ({ users: [...state.users, res.data], loading: false }));
      return res.data;
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  // Login (Read dan validasi)
  login: async (credentials) => {
    set({ loading: true, error: null });
    try {
      if (get().users.length === 0) await get().fetchUsers();
      const user = get().users.find(
        (u) =>
          u.email === credentials.email && u.password === credentials.password
      );
      if (!user) throw new Error("Email atau password salah");
      set({ currentUser: user, loading: false });
      return user;
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  // Update profile (Update)
  updateProfile: async (id, data) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.put(`${baseURL}/${id}`, data);
      set((state) => ({
        users: state.users.map((u) => (u.id === id ? res.data : u)),
        currentUser:
          state.currentUser?.id === id ? res.data : state.currentUser,
        loading: false,
      }));
      return res.data;
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  // Delete user (Delete)
  deleteUser: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${baseURL}/${id}`);
      set((state) => ({
        users: state.users.filter((u) => u.id !== id),
        loading: false,
        currentUser: state.currentUser?.id === id ? null : state.currentUser,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // Logout
  logout: () => set({ currentUser: null }),
}));
