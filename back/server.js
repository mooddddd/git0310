const app = require('./app')
const { sequelize } = require('./models')

app.listen(3000,async ()=>{
    await sequelize.sync({force:false})
    console.log("BE Server Start")
})