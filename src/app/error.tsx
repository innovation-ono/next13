"use client";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-red-100 border-1-4 vorder-red-500 text-red-700 rounded p-3 max-w-md mx:auto w-full">
      <h3 className="font-bold mb-2">エラーが発生しました</h3>
      <button
        onClick={() => reset()}
        className="bg-red-500 text-white px-4 rounded hover:bg-red-400 transition duration-200"
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
