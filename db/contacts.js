import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

export const Contact = sequelize.define(
  "Contact",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "contacts",
    timestamps: false,
  }
);

Contact.sync({ force: false })
  .then(() => {
    console.log("Contact table created successfully.");
  })
  .catch((error) => {
    console.error("Error creating Contact table:", error);
  });
