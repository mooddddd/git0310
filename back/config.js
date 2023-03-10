const config = {
    db: {
        development:{
            host:'127.0.0.1',
            port:'3306',
            database:'logintest',
            username:'root',
            password:' ',
            dialect:'mysql',
            define:{
                freezeTableName: true,
                timestamps: false,
            }
        },
        test:{
            host:'127.0.0.1',
            port:'3306',
            database:'test',
            username:'root',
            password:' ',
            dialect:'mysql',
            define:{
                freezeTableName: true,
                timestamps: false,
            }
        },
    }
}

module.exports = config