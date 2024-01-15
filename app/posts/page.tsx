import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const PostsPage = async () => {
  const response = await fetch("http://localhost:1337/api/posts/1", {
    cache: "no-store",
  });
  const post = await response.json();

  return (
    <MaxWidthWrapper>
      <div>PostsPage</div>
      <h2>{post.title}</h2>
      <Image src={post.imageUrl} alt="image" height={200} width={200} />
    </MaxWidthWrapper>
  );
};

export default PostsPage;
