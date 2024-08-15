export type message = {
  content: string;
  sender: {
    _id: string;
    name: string;
  };
  roomId: string;
  createdAt: Date;
};

export const messages: Array<message> = [
  {
    content: "how are you",
    sender: {
      _id: " 0sa0dff023t3afa0",
      name: "dilpreet",
    },
    roomId: "30r0af0230r0af",
    createdAt: new Date(),
  },
  {
    content: "how are you",
    sender: {
      _id: " 0sa0dfef023t3afa0",
      name: "dilpreet",
    },
    roomId: "30r0af0230r0af",
    createdAt: new Date(),
  },
  {
    content: "how are you",
    sender: {
      _id: " 0sa0dfef023t3afa0",
      name: "ravi",
    },
    roomId: "30r0af0230r0af",
    createdAt: new Date(),
  },
  {
    content: "how are you",
    sender: {
      _id: " 0sa0dff023t3afa0",
      name: "ravi",
    },
    roomId: "30r0af0230r0af",
    createdAt: new Date(),
  },
];
