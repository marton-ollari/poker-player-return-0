class Player {
  static get VERSION() {
    return '3.8';
  }

  static betRequest(gameState, bet) {
    var in_action = gameState.in_action;

    var card1 = gameState.players[in_action].hole_cards[0];
    var card2 = gameState.players[in_action].hole_cards[1];
    var max = Player.getMaxBet(gameState);
    var hold = Player.getHoldValue(gameState);

    card1 = Player.cardRankValue(card1);
    card2 = Player.cardRankValue(card2);

    var all_in = gameState.players[in_action].stack;

    var community_cards = Player.changeCommunityCards(gameState, gameState.community_cards);


    if (Player.getOutPlayers(gameState) <= 2) {
      bet(0);

    } else if (parseInt(card1.rank + card2.rank) > 22 || card1.rank === card2.rank) {
      if (max < 200) {
        bet(100);
      } else if (max < 500) {
        bet(200)
      } else {
        bet(max);
      }

    } else if(community_cards !== undefined || community_cards.length !==0){

      let pair_bet =parseInt(Player.hasPairs(community_cards, card1)+Player.hasPairs(community_cards, card2));
      if(pair_bet>0){
        let drill_bet=Player.hasThreeOfAKind(community_cards, card1, card2);
        if(drill_bet>0){
          bet(drill_bet);
        }else{
          bet(pair_bet)
        }
      }
    }else if(Player.getMaxStack(gameState, in_action)){
      bet(max);

    } else if (parseInt(card1.rank + card2.rank) < 16) {
      bet(0);

    } else {
      bet(hold);
    }
  }


  static showdown(gameState) {
  }

  static getMaxBet(gameState) {
    var max = 0;
    for (var i = 0; i < gameState.players.length; i++) {
      if (gameState.players[i].bet > max) {
        max = gameState.players[i].bet;
      }
    }
    max += gameState.minimum_raise;
    return max;
  }

  static getMaxStack(gameState, in_action) {
    for (var i = 0; i < gameState.players.length; i++) {
      if (gameState.players[i].stack >= gameState.players[in_action].stack) {
        return false;
      }
    }
    return true;
  }

  static getOutPlayers(gameState) {
    var num = 0;
    for (var i = 0; i < gameState.players.length; i++) {
      if (gameState.players[i].status === "out") {
        num += 1;
      }
    }
    return num;
  }


  static getHoldValue(gameState){
    var hold = 0;
    for (var i = 0; i < gameState.players.length; i++) {
      if (gameState.players[i].bet > hold) {
        hold = gameState.players[i].bet;
      }
    }
    return hold;
  }


  static changeCommunityCards(community_cards) {
    for (var i = 0; i < community_cards.length; i++) {
      community_cards[i] = Player.cardRankValue(community_cards[i])
    }
    return community_cards;
  }

  static hasPairs(community_cards, card){

    var bet =0;
      for(var i=0;i<community_cards.length;i++){
        if(community_cards[i].rank === card.rank){
          bet+=card.rank*10;}
      }
  }


  static hasThreeOfAKind(community_cards, card1, card2) {
    let cards = [];
    cards.push.apply(cards, community_cards);
    cards.push(card1, card2);
    let bet = 0;
    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        let num = 0;
        if (cards.i === cards.j) {
          num++;
        }
      }
      if (num === 2) {
        bet += card1.rank * 50;
        return bet;
      }
    }
    return bet;
  }

  static cardRankValue(card) {
    switch (card.rank) {

      case '2' :
        card.rank = 2;
        break;
      case '3' :
        card.rank = 3;
        break;
      case '4' :
        card.rank = 4;
        break;
      case '5' :
        card.rank = 5;
        break;
      case '6' :
        card.rank = 6;
        break;
      case '7' :
        card.rank = 7;
        break;
      case '8' :
        card.rank = 8;
        break;
      case '9' :
        card.rank = 9;
        break;
      case '10' :
        card.rank = 10;
        break;
      case 'J' :
        card.rank = 11;
        break;
      case 'Q' :
        card.rank = 12;
        break;
      case 'K' :
        card.rank = 13;
        break;
      case 'A' :
        card.rank = 14;
        break;
    }
    return card;
  }
}


module.exports = Player;
