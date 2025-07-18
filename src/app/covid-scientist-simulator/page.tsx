"use client";

import Link from "next/link";
import Question from "@/components/simulation/question";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import questions from "./questions.json"; // Make sure this path is correct

export default function Page() {
	const [qIndex, setQIndex] = useState(-1);

	const handleNext = () => {
		if (qIndex < questions.length - 1) {
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

	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-between bg-gradient-to-b from-[#89F6CB] to-[#1E1E1E] p-5">
			<div className="absolute inset-0 z-1 h-full w-full bg-[url(/svgs/noise.svg)] opacity-50"></div>

			<div className="z-2">

				{/* Header */}
				<header className="fixed top-0 left-0 z-10 flex w-full flex-row items-center bg-gray-100 p-5 text-2xl">
					<h1 className="font-koulen text-4xl font-semibold tracking-wider">BTT</h1>
					<span className="flex-grow"></span>
					<div className="font-dm_sans flex flex-row items-center gap-10">
						<Link href="/" className="transition-colors hover:text-blue-600">
							HOME
						</Link>
						<Link
							href="/about"
							className="transition-colors hover:text-blue-600"
						>
							ABOUT
						</Link>
					</div>
				</header>

				{/* Content Area - dynamically rendered based on qIndex */}
				{qIndex === -1 ? (
					// Intro Screen
					<div className="flex flex-grow flex-col items-center justify-center px-4 text-center">
						<h1 className="mb-7 text-3xl">COVID-19 Scientist Simulator</h1>
						<p className="mb-8 max-w-2xl text-justify">
							In this short simulation, go over the decisions scientists had to make as they
							developed the first COVID-19 vaccine comparing them to your very own. Get a sense of
							how important prior research is in every choice. There are no right or wrong answers.
							Step into their shoes of uncertainty and lack of hindsight to make critical decisions
							to save the world!
						</p>
						<Button onClick={handleStartSimulation}>Start Simulation</Button>
					</div>
				) : (
					// Question Screen
					<div className="flex w-full max-w-3xl flex-grow flex-col items-center">
						{/* Ensure qIndex is a valid index for the questions array */}
						{qIndex < questions.length && <Question key={qIndex} question={questions[qIndex]} />}
					</div>
				)}

				{/* Navigation Buttons - Fixed at the bottom */}
				<div className="fixed right-0 bottom-0 left-0 flex justify-center gap-4 border-t bg-white p-4 shadow-lg">
					<Button onClick={handleBack} disabled={qIndex === -1}>
						Back
					</Button>
					{qIndex < questions.length - 1 ? (
						<Button onClick={handleNext}>Next</Button>
					) : (
						<Button onClick={() => alert("End of simulation!")}>Finish</Button>
					)}
				</div>
			</div>
		</div>
	);
}
