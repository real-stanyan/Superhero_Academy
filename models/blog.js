import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  blog: {
    type: String,
    required: [true, "Prompt is required."],
  },
});

const Blog = models.Blog || model("Prompt", BlogSchema);

export default Blog;
