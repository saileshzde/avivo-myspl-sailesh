const db = require("../../db");

class UserService {
  constructor() {
    this.db = db;
  }

  /**
   * @returns {Promise<Array>} List of users.
   */
  async getUserList() {
    try {
      const query = "SELECT * FROM users;";
      const rows = await this.db.query(query);

      return rows[0];
    } catch (error) {
      console.error("Error fetching user list:", error.message);
      throw new Error("Could not fetch users");
    }
  }
}

module.exports = UserService;
