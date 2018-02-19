class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var max=0;
    for (var i=0; i<gameState.players.length;i++){
      if(gameState.players[i].bet>max){
        max = gameState.players[i].bet;
      }
    }
    max+=gameState.minimum_raise;
    console.log("-----------------------------------------")
    console.log(max);
    bet(max);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
