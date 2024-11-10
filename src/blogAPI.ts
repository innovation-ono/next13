import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" }); // SSR

  if (!res.ok) {
    throw new Error("APIでエラーが発生しました!");
  }

  //   await new Promise((resolve) => setTimeout(resolve, 100));
  const articles = await res.json();

  return articles;
};

export const getArticle = async (id: number): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  }); // ISR

  console.log(res);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("APIでエラーが発生しました!");
  }

  const article = await res.json();

  return article;
};
