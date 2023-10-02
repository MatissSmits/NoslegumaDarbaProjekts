const sanitize = require("../setup/sanitize");
const socket = require("../setup/socket");

module.exports = (app) => {
  sanitize(app);
  const port = process.env["PORT"] || 8080;
  const server = app.listen(port, () => {
    console.log(`Express & socket server are listening on port ${port}`);
  });

  socket(server);
};
