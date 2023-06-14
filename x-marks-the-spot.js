const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let recStep = [0, 0];
  for (let move of moves) {
    if ( move === "north" ) {
recStep[1] += 1
    }
    else if (move === "south" ) {
recStep[1] += -1
    }
    else if (move === "west" ) {
recStep[0] += -1
    }
    else if (move === "east" ) {
recStep[0] += 1
    }
  }
  return recStep;
}

finalPosition(moves);