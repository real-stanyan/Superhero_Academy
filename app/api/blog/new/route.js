// import Blog from "@/models/blog";
// import { connectToDB } from "@/utils/database";
// import multer from "multer";

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const uploadSingle = upload.single("image");

// const multerPromise = (req) => {
//   return new Promise((resolve, reject) => {
//     uploadSingle(req, {}, (err) => {
//       if (err) {
//         reject({ message: "Error uploading image" });
//       } else {
//         resolve(req);
//       }
//     });
//   });
// };

// export const POST = async (request, response) => {
//   try {
//     await multerPromise(request);

//     const blog = request.body.blog;
//     const imgData = request.file ? request.file.buffer : null;
//     const imgContentType = request.file ? request.file.mimetype : null;

//     await connectToDB();

//     const newBlog = new Blog({
//       blog,
//       img: {
//         data: imgData,
//         contentType: imgContentType,
//       },
//     });

//     await newBlog.save();

//     response.statusCode = 201;
//     response.json(newBlog);
//   } catch (error) {
//     response.statusCode = 500;
//     response.json({ message: error.message || "Failed to create a new blog" });
//   }
// };
