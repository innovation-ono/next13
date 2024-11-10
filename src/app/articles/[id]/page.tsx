import { getArticle } from "@/blogAPI";
import Image from "next/image";

const Article = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const article = await getArticle(id);

  return (
    <div className="max-w-3x1 mx-auto p-5">
      <Image
        src={"/aesop.jpg"}
        // src={`https://api.unsplash.com/photos/random`}
        alt={"記事画像"}
        width={640}
        height={300}
        unoptimized
      />
      <h1 className="text-4x1 text-center mb-10 mt-10">{article.title}</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default Article;
