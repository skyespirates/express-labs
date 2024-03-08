import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const createComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { text } = req.body;
    const comment = new Comment({
      text,
    });
    await comment.save();
    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $push: {
          comments: comment._id,
        },
      },
      { new: true }
    );
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};
const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

export default {
  createComment,
  getComment,
};
