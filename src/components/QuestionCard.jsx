export default function QuestionCard({ question, options, onAnswer }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto mb-6 transition-colors duration-500">
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      <div className="flex flex-col gap-3">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(option)}
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
