"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TitleCard from "@/components/content/1-titleCard";
import Definition from "@/components/content/2-definition";
import Types from "@/components/content/3-types";

// SINGLE SOURCE OF TRUTH FOR SECTIONS
const sections = [
	{ id: "title-card", label: "Title Card", Component: TitleCard },
	{ id: "definition", label: "Definition", Component: Definition },
	{ id: "types", label: "Types", Component: Types },
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

	return (
		<div>
			{/* Header */}
			<header className="fixed top-0 left-0 z-10 flex w-full flex-row items-center bg-gray-100 p-5 text-2xl">
				<h1 className="font-koulen text-4xl font-semibold tracking-wider">BTT</h1>
				<span className="flex-grow"></span>
				<div className="font-dm_sans flex flex-row items-center gap-10">
					<Link href="/" className="transition-colors hover:text-blue-600">
						HOME
					</Link>
					<Link href="/about" className="transition-colors hover:text-blue-600">
						ABOUT
					</Link>
					<Link href="/covid-scientist-simulator" className="transition-colors hover:text-blue-600">
						SIMULATION
					</Link>
				</div>
			</header>

			{/* Navigation Dots */}
			<nav className="fixed top-1/2 left-5 z-10 flex -translate-y-1/2 flex-col items-center justify-center gap-y-4 rounded-xl bg-[#7CF2A0] p-3 shadow-sm shadow-[#1e1e1e]">
				{sections.map((section) => (
					<a
						key={section.id}
						href={`#${section.id}`}
						className={`group relative h-3 w-3 rounded-full shadow-sm shadow-[#1e1e1e] transition-colors duration-200 ${getDotColor(section.id)}`}
					>
						<span className="absolute top-1/2 left-full ml-4 -translate-y-1/2 transform rounded bg-black px-2 py-1 text-left text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							{section.label}
						</span>
					</a>
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
