export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("contacts", "owner", {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "users", // назва таблиці, не моделі!
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn("contacts", "owner");
}
