class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    var in_action = gameState.in_action;
    var max_our_Money = gameState.players[in_action].stack;

    if (gameState.orbits = 0) {
      bet(max_our_Money);
    } else {
      var max = 0;
      for (var i = 0; i < gameState.players.length; i++) {
        if (gameState.players[i].bet > max) {
          max = gameState.players[i].bet;
        }
      }
      max += gameState.minimum_raise;
      console.log("-----------------------------------------");
      console.log(max);
      console.log("-----------------------------------------");
      bet(max);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
