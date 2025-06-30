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
		<div className="flex flex-col items-center justify-center flex-grow text-center px-4">
			<h1 className="text-3xl font-bold">{question.title}</h1>
			<p className="mt-5 mb-10">{question.prompt}</p>

			{/* Question Input Mode */}
			{hasAnswered === false && (
				<div className="w-full flex md:gap-5 gap-1 flex-wrap justify-center items-stretch">
				{question.choices.map((choice, index) => (
					<div
						key={index}
						className="border-2 border-black p-4 mb-2 rounded-lg text-left bg-gray-100 hover:bg-gray-200 w-75 flex-col flex flex-auto hover:shadow-md transition-shadow duration-200"
						onClick={() => handleShowSolution(index)}
					>
					<h2 className="text-xl font-semibold mb-2">{choice.name}</h2>
					<p className="flex-grow">{choice.description}</p>
				</div>
				))}
				</div>	
			) }
			
			{/* Answered Output Mode */}
			{hasAnswered === true && (
				<div className="w-full flex md:gap-5 gap-1 flex-wrap justify-center items-stretch">
					{question.choices.map((choice, index) => (
						<div
							key={index}
							className={`
								p-4 mb-2 rounded-lg text-left w-75 flex-col flex flex-auto border-black border-2
								${question.decision.answer.includes(index) ? `bg-blue-200` : `bg-gray-100`}
								${index === selectedChoiceIndex ? `border-dashed` : ``}
							`}
						>
						<h2 className="text-xl font-semibold mb-2">{choice.name}</h2>
						<p className="flex-grow">{choice.description}</p>
						</div>
					))}
					<div>
						<h2 className="text-xl font-semibold">Context</h2>
						<p className="text-justify">
							{ question.decision.description }
						</p>
						<h3 className="text-lg mt-3">Sources</h3>
						{question.decision.sources.map((source, index) => (
							<a key={index} href={source}>{source}</a>
						))}
					</div>
				</div>	
			) }

		</div>
	)
}