import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,	
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import styles from "./navbar.module.css";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	const searchInput = (
		<Input
			
		/>
	);

	return (
		
		<NextUINavbar className={styles.navBar} maxWidth="2xl"position="static" > 
			<NavbarContent justify="start">
				<NavbarBrand>
					<NextLink className={styles.navBarItems} href="/">
						<Logo className={styles.logoImage}/>
				<p className={styles.logoText}>
  Sahara Elixir
</p>


					</NextLink>
				</NavbarBrand>



				
			</NavbarContent>

		
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
			

				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>

				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
			<ul className="hidden lg:flex gap-10 font-HeroFont font-bold	text-lg justify-end mr-12">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
		</NextUINavbar>
		
	);
	
};
