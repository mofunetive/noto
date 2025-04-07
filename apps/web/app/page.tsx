"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import supabase from "@/services/supabase";
import { useAuthStore } from "@/store/user";

import Notes from "./components/home/notes";

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const { user, session, signIn, setUser } = useAuthStore();

	useEffect(() => {
		setIsLoading(true);
		supabase.auth.onAuthStateChange((_, session) => {
			const user = session?.user;

			if (user === undefined) {
				return;
			}
			setUser(user, session);

			setIsLoading(false);
		});
		setIsLoading(false);
	}, [setUser, session?.refresh_token]);

	const isLogin = user !== null;

	return (
		<section className="h-full flex flex-col gap-4">
			{isLogin && session ? (
				<Notes session={session} />
			) : (
				!isLogin && (
					<div className="h-full flex flex-col gap-4 justify-center items-center">
						<Label className="text-xl">สวัสดีชาวโลก, นี้คือ Noto เว็บสำหรับโน๊ต</Label>
						<Button
							className="cursor-pointer"
							onClick={signIn}
							// disabled={isLoading}
						>
							{isLoading ? "กำลังโหลด..." : "เข้าสู่ระบบเพื่อเริ่ม Note !"}
						</Button>
					</div>
				)
			)}
		</section>
	);
}
