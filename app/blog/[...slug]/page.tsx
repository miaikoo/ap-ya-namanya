import { posts } from "#site/content";
import { notFound } from "next/navigation";
import PostContent from "./post-content";
import { MDXContent } from "@/components/mdx-components";
import { Tag } from "@/components/tag";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");   // join the strings if its nested
  const post = posts.find((post) => post.slugAsParams === slug);  // find post 
  return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));   // take all posts and return array of objects
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {   // handling not found
    notFound();
  }

  return (    // render
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
      
      {/* Use the new client component for Disqus */}
      <PostContent post={post} />
    </article>
  );
}
