import { connect } from "amqplib";
import fs from "fs/promises";

const subscriber = async () => {
  try {
    const conn = await connect("amqp://localhost");
    const receiver = await conn.createChannel();
    await receiver.assertQueue("images", { durable: false });
    receiver.consume("images", async (message) => {
      const file = JSON.parse(message.content.toString());
      await fs.writeFile(
        `queues/${file.originalname}`,
        Buffer.from(file.buffer)
      );
      console.log(`stored to queues/${file.originalname}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

subscriber();
