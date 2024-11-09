import Image from "next/image";
import Link from "next/link";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src={"/aesop.jpg"}
            // src={`https://api.unsplash.com/photos/random`}
            alt={"記事画像"}
            width={640}
            height={300}
            unoptimized
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-3 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2024-11-09</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            veniam harum error ratione. Eum perferendis, ipsam eligendi
            suscipit, et ipsa, sed ducimus commodi dolorem deserunt minima
            voluptatibus architecto ullam praesentium?
          </Link>
          <Link href={"#"} className="text-pink-900 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src={"/aesop.jpg"}
            // src={`https://api.unsplash.com/photos/random`}
            alt={"記事画像"}
            width={640}
            height={300}
            unoptimized
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-3 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2024-11-09</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            veniam harum error ratione. Eum perferendis, ipsam eligendi
            suscipit, et ipsa, sed ducimus commodi dolorem deserunt minima
            voluptatibus architecto ullam praesentium?
          </Link>
          <Link href={"#"} className="text-pink-900 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
