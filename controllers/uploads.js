import { connect } from "amqplib";
import Image from "../models/Image.js";

const uploadFile = async (req, res) => {
  try {
    const file = req.file;
    const conn = await connect("amqp://localhost");
    const sender = await conn.createChannel();
    sender.sendToQueue("images", Buffer.from(JSON.stringify(file)));
    console.log(`${file.originalname} sent to queue`);
    res.status(201).json({ msg: "file successfully created" });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const uploadImage = async (req, res) => {
  try {
    const file = req.file;
    const image = Buffer.from(JSON.stringify(file));

    const result = await Image.create({ file: image });

    res.status(201).json({ msg: "file successfully created" });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

const getImage = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = await Image.findById(id);
    const file = JSON.parse(obj.file.toString());
    res.set("Content-Type", `${file.mimetype}`);
    res.set("Content-Disposition", `attachment; filename=${file.originalname}`);
    res.end(Buffer.from(file.buffer));
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

export default {
  uploadFile,
  uploadImage,
  getImage,
};
