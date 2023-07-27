import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { blog } = await request.json();

  try {
    await connectToDB();
    const newBlog = new Blog({ content: blog });

    await newBlog.save();
    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
