const express = require("express");
const router = express.Router();

/* GET posts /posts */
router.get("/", (req, res, next) => {
  res.send("NEW /posts/new");
});

router.get("/new", (req, res, next) => {
  res.send("/posts/new");
});
router.post("/", (req, res, next) => {
  res.send("CREATE /posts/create");
});
router.get("/:id", (req, res, next) => {
  res.send("SHOW /posts/show/:id");
});
router.get("/:id/edit", (req, res, next) => {
  res.send("EDIT /posts/:id/edit");
});
router.put("/:id", (req, res, next) => {
  res.send("UPDATE /posts/:id");
});
router.delete("/:id", (req, res, next) => {
  res.send("DELETE /posts/:id");
});
module.exports = router;

/*GET index /posts 
GET new /posts/new
POST create /posts
GET show /posts/:id
GET edit /posts/:id/edit
PUT update /posts/:id
DELETE destroy /posts/:id
*/
