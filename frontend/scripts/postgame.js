function pushGameScore(score) {
  // patch fetch
  // debugger
  let game_score = {
    final_score: `${score}`
  };
  let configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(game_score)
  };
  fetch(`http://localhost:3000/games/${game.gameId}`, configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      congrats(data.final_score);
    });
}

// const tileBox = document.getElementById('tile-box')

function congrats(final_score) {
  
  tileBox.innerHTML = `<h1>Congrats ${game.playerName}! Level completed, your time is ${final_score}</h1>`
}

function high_score_fetch() {
  
}