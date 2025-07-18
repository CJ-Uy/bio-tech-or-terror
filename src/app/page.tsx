"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TitleCard from "@/components/content/1-titleCard";
import Introduction from "@/components/content/2-introduction";
import Definition from "@/components/content/3-definition";
import Types from "@/components/content/4-types";
import WhatYouCanDo from "@/components/content/7-whatYouCanDo";

// SINGLE SOURCE OF TRUTH FOR SECTIONS
const sections = [
	{ id: "title-card", label: "Title Card", Component: TitleCard },
	{ id: "introduction", label: "Introduction", Component: Introduction },
	{ id: "definition", label: "Definition", Component: Definition },
	{ id: "types", label: "Types", Component: Types },
	{ id: "what-you-can-do", label: "What You Can Do", Component: WhatYouCanDo },
];

export default function Home() {
	const [activeSection, setActiveSection] = useState(null);
	const [scrolledSections, setScrolledSections] = useState({});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
						setScrolledSections((prev) => ({
							...prev,
							[entry.target.id]: true,
						}));
					}
				});
			},
			{
				threshold: 0.5,
			},
		);

		sections.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => {
			sections.forEach(({ id }) => {
				const element = document.getElementById(id);
				if (element) observer.unobserve(element);
			});
		};
	}, []);

	const getDotColor = (sectionId) => {
		const ids = sections.map((s) => s.id);
		const currentActiveIndex = ids.indexOf(activeSection);
		const sectionIndex = ids.indexOf(sectionId);

		if (activeSection === sectionId) {
			return "bg-blue-300";
		} else if (scrolledSections[sectionId] && sectionIndex < currentActiveIndex) {
			return "bg-gray-400";
		}
		return "bg-white";
	};

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const headerHeight = 80;
			const elementPosition = element.offsetTop - headerHeight;

			window.scrollTo({
				top: elementPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<div>
			{/* Header */}
			<header className="fixed top-0 left-0 z-10 flex w-full flex-row items-center bg-gray-100 p-5 text-2xl">
				<h1 className="font-koulen text-4xl font-semibold tracking-wider">BTT</h1>
				<span className="flex-grow"></span>
				<div className="font-dm_sans flex flex-row items-center gap-10">
					<Link href="/covid-scientist-simulator" className="transition-colors hover:text-blue-600">
						SIMULATION
					</Link>
					<Link href="/about" className="transition-colors hover:text-blue-600">
						ABOUT
					</Link>
				</div>
			</header>

			{/* Navigation Dots */}
			<nav className="fixed -rotate-90 bottom-0 left-1/2 -translate-x-1/2 md:-translate-0 md:bottom-auto md:rotate-0 md:scale-none md:top-1/2 md:left-5 z-10 flex md:-translate-y-1/2 flex-col items-center justify-center gap-y-4 rounded-xl bg-[#7CF2A0] p-3 shadow-sm shadow-[#999999]">
				{sections.map((section) => (
					<button
						key={section.id}
						onClick={() => scrollToSection(section.id)}
						className={`group relative h-3 w-3 rounded-full shadow-sm shadow-[#1e1e1e] transition-colors duration-200 ${getDotColor(section.id)}`}
					>
						<span className="absolute top-1/2 left-full ml-4 -translate-y-1/2 transform rounded bg-black px-2 py-1 text-left text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							{section.label}
						</span>
					</button>
				))}
			</nav>

			{/* Content */}
			<div className="pt-20">
				{sections.map(({ id, Component }) => (
					<span key={id} id={id} className="h-[calc(100vh-5rem)]">
						<Component />
					</span>
				))}
			</div>
		</div>
	);
}
