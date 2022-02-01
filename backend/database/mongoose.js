require("dotenv").config();
const mongoose = require("mongoose");

module.exports = {
  init: () => {
    const dbOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false,
      family: 4,
    };

    mongoose.connect(`mongodb+srv://discordbot:${process.env.DBPASS}@db.y8d2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, dbOptions);
    mongoose.set("overwriteModels", false);
    mongoose.Promise = global.Promise;

    mongoose.connection.on("connected", () => {
        console.log(`[DATABASE] Server-ul a fost conectat la baza de date!`);
    });

    mongoose.connection.on("disconnected", () => {
        console.log(`[DATABASE] Server-ul a fost deconectat de la baza de date!`);
    });

    mongoose.connection.on("err", (err) => {
        console.log(`[DATABASE] O eroare a fost intalnita!\n${err}`);
    });
  },
};
