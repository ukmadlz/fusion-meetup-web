import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import clsx from "clsx";
import dayjs from "dayjs";
import { FaStar } from "react-icons/fa";

import { cms } from "../../lib/cms";
import { BlogPost } from "../../types/cms/Blog";
import { BlogAuthor } from "./BlogAuthor";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, className }) => {
  const imageProps = useNextSanityImage(cms, post.mainImage!, { enableBlurUp: true });

  return (
    <a
      key={post.key}
      href={`/blog/post/${post.slug}`}
      className={clsx(
        className,
        "group bg-white overflow-hidden rounded-xl box-border shadow hover:border-4 hover:-m-1 hover:border-pink-600",
        "dark:bg-slate-800 dark:shadow-lg dark:hover:border-pink-400"
      )}
    >
      <div className="h-full flex flex-col gap-2">
        <div className="w-full h-40 relative">
          <Image
            src={imageProps.src}
            loader={imageProps.loader}
            layout="fill"
            objectFit="cover"
            alt={`Image for ${post.title}`}
          />

          {post.featured ? (
            <div className="absolute top-2 right-2 bg-yellow text-slate-800 font-bold text-sm rounded px-1 flex gap-1 items-center">
              Featured{" "}
              <span className="text-xs">
                <FaStar />
              </span>
            </div>
          ) : null}
        </div>

        <div className="flex-1 p-6 pt-2 flex flex-col gap-6 justify-between">
          <h2 className="text-2xl font-bold group-hover:text-pink-600 dark:group-hover:text-pink-400 break-words">
            {post.title}
          </h2>

          <div className="flex flex-col gap-4">
            {post.author ? <BlogAuthor teamMember={post.author} /> : null}
            <p>{dayjs(post.publishedAt).format("Do MMMM, YYYY")}</p>
          </div>
        </div>
      </div>
    </a>
  );
};