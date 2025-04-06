import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

import supabase from "@/services/supabase";

interface State {
	user: Session["user"] | null;
	session: Session | null;
	signIn: () => void;
	signOut: () => void;
	setUser: (user?: Session["user"] | null, session?: Session | null) => void;
}

export const useAuthStore = create<State>((set) => ({
	user: null,
	session: null,
	signIn: async () => {
		return await supabase.auth.signInWithOAuth({
			provider: "google",
		});
	},
	signOut: async () => {
		const { error } = await supabase.auth.signOut();

		if (error != null) {
			console.error(error);
		}

		return set({ user: null, session: null });
	},
	setUser: (user?: Session["user"] | null, session?: Session | null) => {
		return set({ user: user ?? null, session: session ?? null });
	},
}));
