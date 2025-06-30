"use client";

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
    <div className="w-full min-h-screen flex flex-col items-center justify-between p-5">
      {/* Content Area - dynamically rendered based on qIndex */}
      {qIndex === -1 ? (
        // Intro Screen
        <div className="flex flex-col items-center justify-center flex-grow text-center px-4">
          <h1 className="text-3xl mb-7">COVID-19 Scientist Simulator</h1>
          <p className="text-justify mb-8 max-w-2xl">
            In this short simulation, go over the decisions scientists had to
            make as they developed the first COVID-19 vaccine comparing them to
            your very own. Get a sense of how important prior research is in
            every choice. There are no right or wrong answers. Step into their
            shoes of uncertainty and lack of hindsight to make critical
            decisions to save the world!
          </p>
          <Button onClick={handleStartSimulation}>Start Simulation</Button>
        </div>
      ) : (
        // Question Screen
        <div className="flex flex-col items-center flex-grow w-full max-w-3xl">
          {/* Ensure qIndex is a valid index for the questions array */}
          {qIndex < questions.length && (
            <Question key={qIndex} question={questions[qIndex]} />
          )}
        </div>
      )}

      {/* Navigation Buttons - Fixed at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg flex justify-center gap-4 border-t">
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
  );
}