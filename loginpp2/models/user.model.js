import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
    'loginsystem', // Database Name
    'root', // Database Username
    'xR5XTepX2weaTQ', // Database password
    {
        host: 'localhost', //Database Host
        dialect: 'mysql' //Database Type
    }
);

sequelize.authenticate().then(() => {
    console.log("Successful connection!");
}).catch((err) => {
    console.error("Sorry, connection failed", err);
})

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

sequelize.sync().then(() => {
    console.log("User table has been created!")
}).catch((err) => {
    console.log("Sorry unable to create the table", err);
})

export default User