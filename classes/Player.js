const PlayerConfig = require("../clsses/PlayerConfig.js");
const PlayerData = require("../classes/PlayerData.js");
const settings = require("../public/settings.js");

// this is where ALL the data is stored about a given PLAYER
class Player {
  constructor(
    socketId,
    playerConfig = new PlayerConfig(settings),
    playerData = new PlayerData("Player", settings)
  ) {
    this.socketId = socketId;
    this.config = playerConfig;
    this.data = playerData;
  }
}

module.exports = Player;
