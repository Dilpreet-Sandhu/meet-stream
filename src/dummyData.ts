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

type dummyUser = {
  _id : string,
  name : string
}

export const dummyUsers : Array<dummyUser> = [
  {
    _id : "sdfkl;afj3w0fa",
    name : "thind"
  },
  {
    _id : "dsfeje0t40s0g02",
    name : "dilpreet"
  },
  {
    _id : "sdfkl;0efae0f043",
    name : "aaditya"
  },
  {
    _id : "sdfkl;dflsjf0wf030",
    name : "harshdeep"
  },
]

interface notification {
  _id : string;
  user : {
    name : string
  };

}

export const notifications : Array<notification> = [
  {
    _id : "303r3arjfja0w3",
    user : {
      name : "dilpreet"
    }
  },
  {
    _id : "d0fsfj0e0wef0esj",
    user : {
      name : "ravi"
    }
  },
]
