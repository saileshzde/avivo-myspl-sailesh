const httpStatus = require("http-status");

const UserService = require("../services/user.services");

// ** user controller
const getUserListController = async (req, res) => {
  const user = new UserService();
  const userdata = user.getUserList();
  res.status(httpStatus.OK).send(userdata);
};

module.exports = {
  getUserListController,
};
