import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subscription: {
    type: DataTypes.ENUM("starter", "pro", "business"),
    defaultValue: "starter",
  },
  token: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});

await User.sync({ alter: true });

export default User;
