"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateBlogPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/article/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, content: content }),
    });

    setLoading(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2x1 font-bold mb-4">ブログ新規作成</h2>
      <form
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-52"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className={`py-2 px-4 border rounded-md ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-400 hover:bg-orange-500"
          } text-slate-100`}
          disabled={loading}
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
