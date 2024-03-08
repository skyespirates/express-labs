const getAllUsers = (req, res) => {
  res.json({
    message: "get all users successfully",
  });
};

const getUserById = (req, res) => {
  res.json({
    message: "get user by id successfully",
  });
};

export default {
  getAllUsers,
  getUserById,
};
