import { BASE_URL } from "@/config/colors";
import { getValue } from "@/utils/localStorage";
import axios from "axios";
import { create } from "zustand";

export interface UserStore {
  jwtToken: string | null;
  isLoggedIn: boolean;
  setJwtToken: (token: string) => void;
  setLoggedInStatus: () => void;
}

export interface User {
  id: string;
  role: string;
  username: string;
}

export interface Blog {
  id: string;
  content: string;
  title: string;
  createdAt: string;
  user: User;
}

export interface Blogs {
  blogs: Blog[];
  fetchBlog: () => any;
}

export const useUserStore = create<UserStore>((set) => ({
  jwtToken: getValue("jwtToken") ? getValue("jwtToken") : null,
  isLoggedIn: getValue("isLoggedIn") ? getValue("isLoggedIn") : false,

  setJwtToken: (token: string) =>
    set((state) => ({ ...state, jwtToken: token })),
  setLoggedInStatus: () => set((state) => ({ ...state, isLoggedIn: true })),
}));

export const useBlogStore = create<Blogs>((set) => ({
  blogs: [],

  fetchBlog: async () => {
    const response = await axios.get(`${BASE_URL}/blog/getAll`, {
      headers: {
        Authorization: `Bearer ${useUserStore.getState().jwtToken}`,
      },
    });
    console.log(response);
    set((state) => ({
      ...state,
      blogs: response.data || [],
    }));
  },
}));
