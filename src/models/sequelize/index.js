const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../../config/sequelize')

const db = {}
const sequelize = new Sequelize(config)

sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize: Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Sequelize: Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db