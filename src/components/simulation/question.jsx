"use client";

import { useState } from "react";
import Link from "next/link";

export default function Question({ question }) {
	const [hasAnswered, setHasAnswered] = useState(false);
	const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);

	function handleShowSolution(index) {
		setHasAnswered(true);
		setSelectedChoiceIndex(index);
	}

	// Base style for all choice buttons. NO border or outline here.
	const choiceButtonStyle =
		"rounded-xl p-6 text-left text-black shadow-md transition-all duration-300 transform";

	return (
		<div className="animate-fade-in flex w-full flex-col items-center">
			{/* Question Text */}
			<h2 className="mb-4 text-5xl font-bold tracking-wider text-black uppercase">
				{question.title}
			</h2>

			{/* Subtext/Prompt */}
			<p className="mb-12 max-w-3xl text-lg text-black">{question.prompt}</p>

			{/* Options Grid */}
			<div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
				{question.choices.map((choice, index) => {
					const isScientistAnswer = hasAnswered && question.decision.answer.includes(index);
					const isSelected = index === selectedChoiceIndex;

					// This logic now uses `outline` which does not affect layout
					const getButtonClasses = () => {
						const baseBg = "bg-gradient-to-b from-white to-gray-200";
						const blueBg = "bg-gradient-to-b from-[#89E4FF] to-[#748FE0]";
						const selectedOutline = "outline outline-[4px] outline-dotted outline-black";

						// State 1: Before any answer is chosen
						if (!hasAnswered) {
							return `cursor-pointer ${baseBg} hover:scale-105`;
						}

						const baseAnsweredStyle = "cursor-default";

						// State 2: After an answer is chosen
						if (isSelected) {
							// Apply the black dotted outline to the selected item
							return `${baseAnsweredStyle} ${isScientistAnswer ? blueBg : `${baseBg} opacity-70`} ${selectedOutline}`;
						} else {
							// All other non-selected items have no outline
							return `${baseAnsweredStyle} ${isScientistAnswer ? blueBg : `${baseBg} opacity-70`}`;
						}
					};

					return (
						<button
							key={index}
							onClick={() => !hasAnswered && handleShowSolution(index)}
							className={`${choiceButtonStyle} ${getButtonClasses()}`}
							disabled={hasAnswered}
						>
							<h3 className="text-2xl font-bold">{choice.name}</h3>
							<p className="mt-2 text-base font-normal">{choice.description}</p>
						</button>
					);
				})}
			</div>

			{/* Answered Output Mode - Context and Sources */}
			{hasAnswered && (
				<div className="animate-fade-in mt-12 w-full max-w-4xl p-6 text-left">
					<h2 className="text-2xl font-bold text-black uppercase">Context:</h2>
					<p className="mt-2 text-base text-black">
						{question.decision.description}
						<div className="text-right font-semibold">
							{"Sources: "}
							{question.decision.sources.map((source, index) => (
								<Link
									key={index}
									href={source}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-700 hover:text-blue-500"
								>
									 [{index + 1}] 
								</Link>
							))}
						</div>
					</p>
				</div>
			)}
		</div>
	);
}
