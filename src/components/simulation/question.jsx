"use client";

import { useState } from "react";

export default function Question({ question }) {
	const [hasAnswered, setHasAnswered] = useState(false);
	const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);

	function handleShowSolution(index) {
		setHasAnswered(true);
		setSelectedChoiceIndex(index);
	}

	return (
		<div className="flex flex-grow flex-col items-center justify-center px-4 text-center">
			<h1 className="text-3xl font-bold">{question.title}</h1>
			<p className="mt-5 mb-10">{question.prompt}</p>

			{/* Question Input Mode */}
			{hasAnswered === false && (
				<div className="flex w-full flex-wrap items-stretch justify-center gap-1 md:gap-5">
					{question.choices.map((choice, index) => (
						<div
							key={index}
							className="mb-2 flex w-75 flex-auto flex-col rounded-lg border-2 border-black bg-gray-100 p-4 text-left transition-shadow duration-200 hover:bg-gray-200 hover:shadow-md"
							onClick={() => handleShowSolution(index)}
						>
							<h2 className="mb-2 text-xl font-semibold">{choice.name}</h2>
							<p className="flex-grow">{choice.description}</p>
						</div>
					))}
				</div>
			)}

			{/* Answered Output Mode */}
			{hasAnswered === true && (
				<div className="flex w-full flex-wrap items-stretch justify-center gap-1 md:gap-5">
					{question.choices.map((choice, index) => (
						<div
							key={index}
							className={`mb-2 flex w-75 flex-auto flex-col rounded-lg border-2 border-black p-4 text-left ${question.decision.answer.includes(index) ? `bg-blue-200` : `bg-gray-100`} ${index === selectedChoiceIndex ? `border-dashed` : ``} `}
						>
							<h2 className="mb-2 text-xl font-semibold">{choice.name}</h2>
							<p className="flex-grow">{choice.description}</p>
						</div>
					))}
					<div>
						<h2 className="text-xl font-semibold">Context</h2>
						<p className="text-justify">{question.decision.description}</p>
						<h3 className="mt-3 text-lg">Sources</h3>
						{question.decision.sources.map((source, index) => (
							<p>
								<a
									key={index}
									href={source}
									className="text-blue-500 underline hover:text-blue-700"
								>
									{source}
								</a>
							</p>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
