import { getValue } from "@/utils/localStorage";
import { create } from "zustand";

export interface UserStore {
  jwtToken: string | null;
  isLoggedIn: boolean;
  setJwtToken: (token: string) => void;
  setLoggedInStatus: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  jwtToken: getValue("jwtToken") ? getValue("jwtToken") : null,
  isLoggedIn: getValue("isLoggedIn") ? getValue("isLoggedIn") : false,

  setJwtToken: (token: string) =>
    set((state) => ({ ...state, jwtToken: token })),
  setLoggedInStatus: () => set((state) => ({ ...state, isLoggedIn: true })),
}));
