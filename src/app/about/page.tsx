"use client";

import Link from "next/link";

export default function About() {
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
					<Link href="/covid-scientist-simulator" className="transition-colors hover:text-blue-600">
						SIMULATION
					</Link>
				</div>
			</header>
		</div>
	);
}