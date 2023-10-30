

// this function gets called whem the user enters the game
function init() {
  // start drawing the screen recursively!
  draw();

  // call the `init event` when the user is ready for the data
  ("init", {
    playerName: player.name,
  });
}

("initReturn", (data) => {
  orbs = data.orbs;

  setInterval(() => {
    socket.emit("tick", {
      xVector: player.xVector,
      yVector: player.yVector,
    });
  }, Math.ceil(1000 / fps));
});

("tock", (data) => {
  players = data.players;
});

("tickTock", (data) => {
  player.locX = data.playerX;
  player.locY = data.playerY;
  document.querySelector(".player-score").innerHTML = data.playerScore;
});

("orbSwitch", (data) => {
  orbs.splice(data.orbIndex, 1, data.newOrb);
});

("updateLeaderBoard", (topPlayers) => {
  // Clear the leader board
  document.querySelector(".leader-board").innerHTML = "";

  // update the leader board
  topPlayers.forEach((p) => {
    document.querySelector(
      ".leader-board"
    ).innerHTML += `<li class="leaderboard-player">${p.name} - ${p.score}</li>`;
  });
});

("playerDeath", (data) => {
  const killed = data.died.name;
  const killer = data.killedBy.name;
  const message = `${killed} absorbed by ${killer}`;

  document.querySelector("#game-message").innerHTML = message;
  $("#game-message").css({
    "background-color": "#00e6e6",
    opacity: 1,
  });
  $("#game-message").show();
  $("#game-message").fadeOut(5000);
});
