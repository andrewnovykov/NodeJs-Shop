const express = require('express');

const router = express.Router();

router.use("/add-product", (req, res) => {
    console.log("It is next middelvare!");
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <button  type="submit" > Submit</button> </form>');
});


router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});


module.exports = router;