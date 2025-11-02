export default function ResultCard({ score, total, onRestart }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center w-full max-w-md mx-auto transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-4">Quiz Completed 🎉</h2>
      <p className="text-xl mb-4">
        Your Score: <span className="font-bold text-indigo-600">{score}</span> /{" "}
        {total}
      </p>
      <button
        onClick={onRestart}
        className="bg-indigo-500 text-white px-6 py-2 rounded-xl hover:bg-indigo-600 transition"
      >
        Restart Quiz
      </button>
    </div>
  );
}
