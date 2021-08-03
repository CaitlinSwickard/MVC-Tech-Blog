const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userSeedData.json');


const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log(userData);
    await User.create(userData[0]);

  } catch (error) {
    console.log(error);
  }
  
  process.exit(0);
};

seed();