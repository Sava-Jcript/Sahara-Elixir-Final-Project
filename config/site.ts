export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		// {
		// 	label: "Home",
		// 	href: "/",
		// },
    {
      label: "The Story",
      href: "/about",
    },
    {
      label: "The Tree",
      href: "/arganThree-section",
    },
    // {
    //   label: "Products",
    //   href: "/blog",
    // },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	navMenuItems: [
		{
			label: "The Story",
			href: "/profile",
		},
		{
			label: "About",
			href: "/dashboard",
		},
		{
			label: "Products",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Contact",
			href: "/calendar",
		},
		// {
		// 	label: "Settings",
		// 	href: "/settings",
		// },
		// {
		// 	label: "Help & Feedback",
		// 	href: "/help-feedback",
		// },
		// {
		// 	label: "Logout",
		// 	href: "/logout",
		// },
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
