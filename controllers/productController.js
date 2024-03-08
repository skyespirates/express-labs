const getAllProducts = (req, res) => {
  res.json({
    message: "get all products successfully",
  });
};

const getPrOductById = (req, res) => {
  res.json({
    message: "get product by id successfully",
  });
};

export default {
  getAllProducts,
  getPrOductById,
};
