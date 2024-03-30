const express = require("express");
const {
  notOluştur,
  notlarGetir,
  notGetir,
  notSil,
  notGüncelle,
} = require("../controllers/notController");
const router = express.Router();

router.get("/", notlarGetir);
//listele
router.get("/:id", notGetir);
//ekle
router.post("/", notOluştur);
//sill
router.delete("/:id", notSil);

//güncelle
router.patch("/:id", notGüncelle);

module.exports = router;
