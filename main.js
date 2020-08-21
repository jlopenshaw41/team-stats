const team = {
  _players: [
    {
      firstName: 'Laura', 
      lastName: 'Sherrington' , 
      age: 33,},
    {
      firstName: 'Katie', 
      lastName: 'Carleton', 
      age: 33,
    },
    {
      firstName: 'Samantha', 
      lastName: 'deVaal' , 
      age: 33,
    }
  ],

  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Patriots',
      teamPoints: 17,
      opponentPoints: 33,
    },
    {
      opponent: 'Bears',
      teamPoints: 45,
      opponentPoints: 11
    }
  ],

  get games() {
    return this._games;
  },

  get players() {
    return this._players;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };

    this.games.push(game);

  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame('Millwall', 44, 56);
team.addGame('Arsenal', 2,4);
team.addGame('Man United', 56, 78);

console.log(team._games);