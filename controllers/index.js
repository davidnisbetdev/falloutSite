export default  {
  getIndex: (req, res) => {
    res.render("./pages/index.hbs");
  },

  getRegister: (req, res) => {
    res.render("./pages/register.ejs");
  },

  getLogin: (req, res) => {
    res.render("./pages/login.ejs");
  },

  getDashboard: (req, res) => {
    res.render("./pages/dashboard.ejs");
  },
};
