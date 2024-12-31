const httpStatus = require("http-status");

const UserService = require("../services/user.services");

// ** user controller
const getUserListController = async (req, res) => {
  const user = new UserService();
  const userdata = await user.getUserList();
  res.send(userdata);
  console.log(userdata);
};

module.exports = {
  getUserListController,
};
