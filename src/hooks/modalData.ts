export const successFeedback = {
  add: {
    isError: false,
    isSuccess: true,
    title: "Congratulations!",
    firstMessage: "Boardgame was",
    secondMessage: "added",
    icon: "add success",
  },

  delete: {
    isError: false,
    isSuccess: true,
    title: "Bye Bye game!",
    firstMessage: "Boardgame was",
    secondMessage: "deleted",
    icon: "delete success",
  },

  edit: {
    isError: false,
    isSuccess: true,
    title: "Congratulations!",
    firstMessage: "Boardgame was",
    secondMessage: "modified",
    icon: "edit success",
  },

  credentials: {
    isError: false,
    isSuccess: true,
    title: "Welcome!",
    firstMessage: "Your credentials are",
    secondMessage: "valid",
    icon: "credentials success",
  },
};

export const errorFeedback = {
  add: {
    isError: true,
    isSuccess: false,
    title: "Something went wrong!",
    firstMessage: "Boardgame was",
    secondMessage: "not added",
    icon: "add failed",
  },

  delete: {
    isError: true,
    isSuccess: false,
    title: "Something went wrong!",
    firstMessage: "Boardgame was",
    secondMessage: "not deleted",
    icon: "delete failed",
  },

  edit: {
    isError: true,
    isSuccess: false,
    title: "Something went wrong!",
    firstMessage: "Boardgame was",
    secondMessage: "not modified",
    icon: "edit failed",
  },

  credentials: {
    isError: true,
    isSuccess: false,
    title: "Oh no! Try it again",
    firstMessage: "Your credentials are",
    secondMessage: "not valid",
    icon: "credentials failed",
  },

  loadBoardgames: {
    isError: true,
    isSuccess: false,
    title: "!Something went wrong!",
    firstMessage: "Boardgame couldn't load",
    secondMessage: "try again",
    icon: "loading failed",
  },
};
