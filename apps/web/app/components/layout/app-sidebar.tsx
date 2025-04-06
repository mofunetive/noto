"use client";

import { ChevronRight, LogOut, NotebookPen, User2 } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/user";

const items = [
	{
		title: "Note ของฉัน",
		url: "#",
		icon: NotebookPen,
		route: "/",
	},
	// {
	//   title: "Settings",
	//   url: "#",
	//   icon: Settings,
	// },
];

export function AppSidebar() {
	const { user, signOut } = useAuthStore();

	return (
		<Sidebar>
			<SidebarHeader>
				<Label className="text-center text-3xl text-[#252525]">Noto</Label>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup />
				<SidebarGroup>
					<SidebarGroupLabel>เมนู</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.route}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton>
							<User2 />
							{user?.user_metadata.name ?? "Username"}
							<ChevronRight className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent side="right">
						<div className="flex m-2 gap-2 items-center">
							<Avatar>
								<AvatarImage src={user?.user_metadata.avatar_url ?? "https://i.ibb.co/QvZF9YQ0/1743190075465.jpg"} />
								<AvatarFallback>N</AvatarFallback>
							</Avatar>
							<div className="flex flex-col gap-1">
								<Label>{user?.user_metadata.name ?? "Not login"}</Label>
								<Label>{user?.email}</Label>
							</div>
						</div>
						{/* <DropdownMenuSeparator />
						<DropdownMenuItem>
							<Label>Account</Label>
						</DropdownMenuItem> */}
						{/* <DropdownMenuItem>
							<Label>Test</Label>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Label>Test 2</Label>
						</DropdownMenuItem> */}
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={signOut}>
							<LogOut />
							<Label>Logout</Label>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
