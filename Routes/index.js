import express from 'express'
const router = express.Router();
import indexController from "../controllers/index.js"
//const authController = require("../controllers/auth");
//const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Main Page
router.get("/", (req, res) => {
  res.render("./views/index.hbs");
});

//Login Page
// router.get("/login", ensureGuest, (req, res) => {
//   res.render("./pages/login.ejs");
// });

// Dashboard

//router.get("/dashboard", ensureAuth, (req, res) => {
  ////res.render("./pages/dashboard.ejs");
//});

//Register Page
// router.get("/register", indexController.getRegister);
// router.post("/register", authController.postRegister);

// //Logout Page
// router.get("/logout", ensureAuth, (req, res) => {
//   req.logout();
//   req.session.destroy((err) => {
//     if (err)
//       console.log("Error : Failed to destroy the session during logout.", err);
//     req.user = null;
//     res.redirect("/");
//   });
// });
export default router;
