import Image from "next/image";

const Article = ({ params }: { params: { id: number } }) => {
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
      <h1 className="text-4x1 text-center mb-10 mt-10">ここがタイトル</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>ここが本文</p>
      </div>
    </div>
  );
};

export default Article;
