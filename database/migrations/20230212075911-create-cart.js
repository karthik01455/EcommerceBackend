'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
     
      userName: {
        type: Sequelize.STRING,
        primaryKey:true
      },
      productId: {
        type: Sequelize.INTEGER,
        primarykey:true,
        foreignKey: true,
        references: {
          model: 'Products',
          key: 'id',
        }
      },
      count: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carts');
  }
};