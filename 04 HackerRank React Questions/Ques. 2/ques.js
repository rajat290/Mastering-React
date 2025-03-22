import React, { useState } from "react";

const FeedbackCard = ({ title }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg text-center w-64">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex justify-center gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() => setUpvotes(upvotes + 1)}
        >
          Upvote
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={() => setDownvotes(downvotes + 1)}
        >
          Downvote
        </button>
      </div>
      <p className="mt-2">Upvotes: {upvotes}</p>
      <p>Downvotes: {downvotes}</p>
    </div>
  );
};

const CodeReviewFeedback = () => {
  const aspects = ["Readability", "Performance", "Security", "Documentation", "Testing"];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="w-full bg-gray-800 text-green-400 text-center py-4 text-2xl font-bold">
        Code Review Feedback
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {aspects.map((aspect) => (
          <FeedbackCard key={aspect} title={aspect} />
        ))}
      </div>
    </div>
  );
};

export default CodeReviewFeedback;
