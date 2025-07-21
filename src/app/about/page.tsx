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

			{/* Content */}
			<div className="flex h-screen w-screen flex-col items-center justify-center">
				<h1 className="text-bold font-koulen text-center text-7xl md:text-9xl">MitochonLIMA</h1>
				<h2 className="mx-9 mb-5 text-center text-2xl">
					Bautisa, Jeconiah &nbsp;&nbsp;&nbsp; Celestino, Kenaz &nbsp;&nbsp;&nbsp; Figuerres, Justin
					&nbsp;&nbsp;&nbsp; Manansala, Charlisze &nbsp;&nbsp;&nbsp; Uy, Charles Joshua
				</h2>
				<p>This project was created for our BIO 12.01-F. LOVE YOU MAAM FISHDALISCIOUS</p>
			</div>
		</div>
	);
}
