const mongoose = require("mongoose");

const sema = mongoose.Schema;

const notSema = sema(
  {
    baslik: {
      type: String,
      required: [true, "Başlık zorunlu olarak girilmelidir"],
    },
    aciklama: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Not", notSema);
