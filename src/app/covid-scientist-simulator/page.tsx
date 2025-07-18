"use client";

import Link from "next/link";
import Question from "@/components/simulation/question";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import questions from "./questions.json";
import { useRouter } from "next/navigation"; // 1. Import useRouter

export default function Page() {
	const [qIndex, setQIndex] = useState(-1);
	const router = useRouter(); // 2. Initialize the router

	const handleNext = () => {
		// We allow qIndex to go one beyond the array length to signal the end screen
		if (qIndex < questions.length) {
			setQIndex(qIndex + 1);
		}
	};

	const handleBack = () => {
		if (qIndex > -1) {
			setQIndex(qIndex - 1);
		}
	};

	const handleStartSimulation = () => {
		setQIndex(0);
	};

	// 3. Create a handler for the "Back to Home" button
	const handleRedirectHome = () => {
		router.push("/");
	};

	const navButtonStyle =
		"bg-gradient-to-b from-gray-50 to-gray-200 hover:from-white hover:to-gray-100 text-black font-semibold py-2 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-300";

	return (
		// Updated background gradient
		<div className="relative flex h-screen w-full flex-col bg-gradient-to-b from-[#87FFCF] to-[#999999] text-black">
			{/* Noise overlay */}
			<div className="absolute inset-0 z-0 h-full w-full bg-[url(/svgs/noise.svg)] opacity-60"></div>

			<header className="fixed top-0 left-0 z-20 flex w-full flex-row items-center bg-white p-5 text-2xl text-black">
				<h1 className="font-koulen text-4xl font-semibold tracking-wider">BTT</h1>
				<span className="flex-grow"></span>
				<div className="font-dm_sans flex flex-row items-center gap-10">
					<Link href="/" className="transition-colors hover:text-gray-300">
						HOME
					</Link>
					<Link href="/about" className="transition-colors hover:text-gray-300">
						ABOUT
					</Link>
				</div>
			</header>

			{/* Scrollable Content Area */}
			<main className="z-10 flex-1 overflow-y-auto px-4 pt-24 pb-28">
				<div className="flex min-h-full w-full flex-col items-center justify-center text-center">
					{qIndex === -1 ? (
						// Intro Screen
						<div className="animate-fade-in flex flex-col items-center">
							<h1 className="mb-4 text-5xl font-bold text-black">COVID-19 Scientist Simulator</h1>
							<p className="mb-8 max-w-2xl text-lg text-black">
								In this short simulation, go over the decisions scientists had to make as they
								developed the first COVID-19 vaccine comparing them to your very own. Step into
								their shoes of uncertainty and lack of hindsight to make critical decisions to save
								the world!
							</p>
							<Button
								onClick={handleStartSimulation}
								className="transform rounded-lg bg-white/90 px-10 py-3 font-semibold text-gray-800 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white"
							>
								Start Simulation
							</Button>
						</div>
					) : (
						// Question or End Screen
						<div className="w-full max-w-4xl">
							{/* 4. Use a clear if/else for Question vs. End Card */}
							{qIndex < questions.length ? (
								<Question key={qIndex} question={questions[qIndex]} />
							) : (
								// End Card Screen
								<div className="animate-fade-in flex flex-col items-center">
									<h1 className="mb-4 text-5xl font-bold text-black">Thank You for Playing!</h1>
									<p className="mb-8 max-w-2xl text-lg text-black">
										You have completed the COVID-19 Scientist Simulator. We hope you enjoyed
										stepping into the shoes of the scientists who worked to save the world.
									</p>
									<Button
										onClick={handleRedirectHome} // Use the new handler
										className="transform rounded-lg bg-white/90 px-10 py-3 font-semibold text-gray-800 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white"
									>
										Back to Home
									</Button>
								</div>
							)}
						</div>
					)}
				</div>
			</main>

			{/* 5. Update condition to hide nav buttons on the end screen */}
			{qIndex > -1 && qIndex < questions.length && (
				<div className="fixed right-0 bottom-0 left-0 z-20 flex justify-center gap-4 p-6">
					<Button onClick={handleBack} className={navButtonStyle} disabled={qIndex === 0}>
						Back
					</Button>
					{qIndex < questions.length - 1 ? (
						<Button onClick={handleNext} className={navButtonStyle}>
							Next
						</Button>
					) : (
						<Button
							onClick={handleNext} // This now correctly transitions to the end card
							className={`${navButtonStyle} bg-blue-500 text-white hover:bg-blue-400 hover:from-blue-500 hover:to-blue-400`}
						>
							Finish
						</Button>
					)}
				</div>
			)}
		</div>
	);
}
