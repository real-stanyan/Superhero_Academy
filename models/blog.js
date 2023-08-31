import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  blog: {
    type: String,
    required: [true, "Prompt is required."],
  },
  img: { data: Buffer, contentType: String },
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
