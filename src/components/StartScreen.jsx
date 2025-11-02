import React from "react";

export default function StartScreen({ onSelectType }) {
  const quizTypes = ["Generic", "Coding", "IQ"];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-6">Select Quiz Type 🎯</h2>
      <div className="flex flex-col gap-4">
        {quizTypes.map((type) => (
          <button
            key={type}
            onClick={() => onSelectType(type)}
            className="bg-indigo-500 text-white py-3 px-4 rounded-xl hover:bg-indigo-600 transition font-medium"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
