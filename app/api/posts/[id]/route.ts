import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Props) {
  // post id
  const id = Number(params.id);

  // find the post
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return NextResponse.json({ messag: "Post not Found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

const posts = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    description:
      "JavaScript is a popular programming language primarily used for enhancing web pages to be more interactive and user-friendly. It allows developers to implement complex things on web pages, such as slideshows, forms, and other interactive elements.",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Getting Started with React",
    description:
      "React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile apps. React allows you to design simple views for each state in your application, and it will efficiently update and render the right components when your data changes.",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Understanding Next.js",
    description:
      "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications. It's a production-ready framework that allows developers to build highly scalable and performant web applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Advanced JavaScript Concepts",
    description:
      "JavaScript has many advanced concepts that can help you write cleaner and more efficient code. These include closures, prototypes, promises, async/await, and more. Understanding these concepts can greatly enhance your JavaScript skills.",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Mastering React Hooks",
    description:
      "React Hooks are functions that let you use state and other React features without writing a class. They allow you to reuse stateful logic between components, making your code more readable and maintainable.",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Building a Full Stack Application with Next.js and MongoDB",
    description:
      "Next.js is not just for front-end development. With its API routes feature, you can easily build full stack applications using Next.js and MongoDB. This tutorial will guide you through the process of creating a full stack application with Next.js and MongoDB.",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
