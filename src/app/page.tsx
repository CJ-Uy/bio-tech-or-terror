"use client"; // This is necessary for client-side functionality in Next.js

import { useState, useEffect } from "react";
import Link from "next/link";
import TitleCard from "@/components/content/1-titleCard";
import Definition from "@/components/content/2-definition";
import Types from "@/components/content/3-types";

export default function Home() {
	const [activeSection, setActiveSection] = useState(null);
	const [scrolledSections, setScrolledSections] = useState({}); // To track completed sections

	useEffect(() => {
		const sectionIds = ["title-card", "definition", "types"];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
						// Mark the section as scrolled past once it's been in view
						setScrolledSections((prev) => ({
							...prev,
							[entry.target.id]: true,
						}));
					}
				});
			},
			{
				threshold: 0.5, // Trigger when 50% of the section is visible
				// rootMargin: '-100px 0px -100px 0px', // Adjust if header/footer is covering content
			},
		);

		sectionIds.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		});

		// Clean up the observer when the component unmounts
		return () => {
			sectionIds.forEach((id) => {
				const element = document.getElementById(id);
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, []); // Empty dependency array means this runs once on mount

	// Function to determine dot color
	const getDotColor = (sectionId) => {
		if (activeSection === sectionId) {
			return "bg-blue-300"; // Active section color (you can choose any color)
		} else if (scrolledSections[sectionId]) {
			// Check if the current scroll position is past this section
			// A simple way to determine "done with a section" is if it was previously active
			// or if the current active section is further down the page.
			const currentActiveIndex = ["title-card", "definition", "types"].indexOf(activeSection);
			const sectionIndex = ["title-card", "definition", "types"].indexOf(sectionId);

			if (sectionIndex < currentActiveIndex) {
				return "bg-gray-400";
			}
		}
		return "bg-white";
	};

	return (
		<div>
			{/* Fixed Components */}
			<header className="fixed top-0 z-10 flex w-screen flex-row items-center bg-gray-100 p-5 text-2xl">
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
			<nav className="fixed top-1/2 left-5 z-10 flex -translate-y-1/2 flex-col items-center justify-center gap-y-4 rounded-xl bg-[#7CF2A0] p-3 shadow-sm shadow-[#1e1e1e]">
				<a
					href="#title-card"
					className={`group relative h-3 w-3 rounded-full shadow-sm shadow-[#1e1e1e] transition-colors duration-200 ${getDotColor("title-card")}`}
				>
					<span className="absolute top-1/2 -left-20 -translate-y-1/2 transform rounded bg-black px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						Title Card
					</span>
				</a>
				<a
					href="#definition"
					className={`group relative h-3 w-3 rounded-full shadow-sm shadow-[#1e1e1e] transition-colors duration-200 ${getDotColor("definition")}`}
				>
					<span className="absolute top-1/2 -left-20 -translate-y-1/2 transform rounded bg-black px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						Definition
					</span>
				</a>
				<a
					href="#types"
					className={`group relative h-3 w-3 rounded-full shadow-sm shadow-[#1e1e1e] transition-colors duration-200 ${getDotColor("types")}`}
				>
					<span className="absolute top-1/2 -left-20 -translate-y-1/2 transform rounded bg-black px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						Types
					</span>
				</a>
			</nav>
			{/* Margin top to compensate for the header height */}
			{/* prettier-ignore */}
			<div className="pt-20">
        <span id="title-card"> <TitleCard /> </span>
        <span id="definition"> <Definition /> </span>
        <span id="types"> <Types /> </span>
      </div>
		</div>
	);
}
