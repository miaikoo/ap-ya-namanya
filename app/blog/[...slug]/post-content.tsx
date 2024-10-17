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
  const [pageURL, setPageURL] = useState("");   // store current page url

  useEffect(() => {
    if (typeof window !== "undefined") {    // check if window object avail
      setPageURL(window.location.href);     // dynamically updated when the page is loaded
    }
  }, []);

  const disqusConfig = {
    url: pageURL,
    identifier: post.slug,
    title: post.title,
  };

  return (
    <>
      <div id="disqus_thread"></div>
      <DiscussionEmbed shortname="ap-ya-namany" config={disqusConfig} />
    </>
  );
}
