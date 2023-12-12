"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import styles from "./pageStyle.module.css";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import image0 from "../public/images/image0.svg";
import { useState } from "react";
import Image from "next/image";
import Section0 from "../components/Homepage-sections/Section0.jsx";
import Section1 from "../components/Homepage-sections/Section1.jsx";
import Section2 from "../components/Homepage-sections/Section2.jsx";
import Footer from "../components/Footer/page"

export default function Home() {
  return (
    <div>
      <Section0 />
      <Section1 />
      {/* <Section2 /> */}
      <Footer />
    </div>
    
  );
}
