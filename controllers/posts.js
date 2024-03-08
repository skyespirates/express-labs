import Post from "../models/Post.js";

const createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const post = new Post({
      content,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate("comments");
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

export default {
  createPost,
  getPost,
};
