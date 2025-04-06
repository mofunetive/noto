import "./globals.css";

import type { Metadata } from "next";
import { Toaster } from "sonner";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
	title: "Noto",
	description: "Note app for everyone",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SidebarProvider>
					<AppSidebar />
					<main className="w-full p-8"> {children}</main>
					<Toaster />
				</SidebarProvider>
			</body>
		</html>
	);
}
