const fs = require('fs')
const path = require('path')

const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('../config')['db'][env]



const sequelize = new Sequelize(config.database, config.username, config.password, config)


// sequelize -> models
fs.readdirSync(__dirname).filter(v=>v.indexOf('model') !== -1).forEach(file=>{
    require(path.join(__dirname,file))(sequelize,Sequelize)
})
// sequelize 관계형

const {models} = sequelize
for(const key in models) {
    if(typeof models[key].associate !== 'function') continue
    models[key].associate(models)
}

module.exports = {
    Sequelize,
    sequelize
}