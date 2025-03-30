import supabase from "@/services/supabase";

import { create } from "zustand";
import { Session } from "@supabase/supabase-js";

interface State {
	user: Session["user"] | null;
	signIn: () => void;
	signOut: () => void;
	setUser: (user: Session["user"] | null) => void;
}

export const useAuthStore = create<State>((set) => ({
	user: null,
	signIn: async () => {
		await supabase.auth.signInWithOAuth({
			provider: "google",
		});
	},
	signOut: async () => {
		const { error } = await supabase.auth.signOut();

		if (error != null) {
			console.error(error);
		}

		return set({ user: null });
	},
	setUser: async (user: Session["user"] | null) => {
		return set({ user: user });
	},
}));
