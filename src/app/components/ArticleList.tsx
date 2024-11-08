import Image from "next/image";
import Link from "next/link";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src={`https://source.unsplash.com/collection/1346951/1000x500?sig=1`}
            alt={"記事画像"}
            width={640}
            height={300}
            unoptimized
          />
        </Link>
      </article>
    </div>
  );
};

export default ArticleList;
