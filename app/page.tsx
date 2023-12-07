"use client"

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import styles from "./pageStyle.module.css";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import image0 from "../public/images/image0.svg";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
	const [newLogo] = useState(image0);
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={styles.neonEffekt}>Discover Pure Harmony in Every Jar&nbsp;</h1>
				
			</div>

			
			<div >
      <Image className={styles.neonEffekt} src={newLogo} alt="logo"></Image></div>



			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					
				</Snippet>
			</div>
		</section>
	);
}
