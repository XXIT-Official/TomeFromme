const express = require("express");
const router = express.Router();
const Letter = require("../models/letter");
const mongoose = require('mongoose');

/* GET home page. */
router.get("/",  (req, res, next) => {
  res.render("index");
});

router.post("/email", (req,res)=>{
  console.log(req.body.email);
  res.redirect(`/letter/${req.body.email}`);
});

router.get("/letter/:email",  (req, res) => {
  res.render("key",{email:req.params.email});
});

router.post("/letter/:email",  (req, res, next) => {
  res.redirect(`/letter/${req.params.email}/${req.body.key}`);
});

router.get("/letter/:email/:key",(req,res)=>{
  Letter.findOne({ email:req.params.email, ukey:req.params.key })
      .exec()
      .then(data => {
        if (data) {
          console.log(data)
            res.render("letter",{content:data});
        } else {
            res.render("keychk");
        }
      });
});

router.get("/loading", (req, res, next) => {
  res.render("loading");
});
module.exports = router;
