"use client";
import { useEffect, useState } from "react";
import { DiscussionEmbed } from 'disqus-react';

interface PostContentProps {
  post: {
    title: string;
    slug: string;
  };
}

export default function PostContent({ post }: PostContentProps) {
  const [pageURL, setPageURL] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageURL(window.location.href);
    }
  }, []);

  const disqusConfig = {
    url: pageURL, // Use the dynamically set page URL
    identifier: post.slug, // The unique identifier for the post
    title: post.title, // The title of the post
  };

  return (
    <>
      <div id="disqus_thread"></div>
      <DiscussionEmbed shortname="ap-ya-namany" config={disqusConfig} />
    </>
  );
}
