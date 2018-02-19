class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var ChipList = [];
    for (var i=0; i<gameState.players.length;i++){
      ChipList.push(gameState.players[i].stack);
    }
    console.log(ChipList);
    bet(1000);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
