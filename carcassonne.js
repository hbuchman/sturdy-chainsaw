tilImages = [];
var meepleImages = [];

function getInitialImageList() {

  var city4 = Array(1).fill("http://russcon.org/RussCon/carcassonne/city4.png");

  var city3 = Array(3).fill("http://russcon.org/RussCon/carcassonne/city3.png");

  var city3S = Array(1).fill("http://russcon.org/RussCon/carcassonne/city3s.png");

  var straightC = Array(1).fill("http://russcon.org/RussCon/carcassonne/city2we.png");

  var straightCS = Array(2).fill("http://russcon.org/RussCon/carcassonne/city2wes.png");

  var diagC = Array(3).fill("http://russcon.org/RussCon/carcassonne/city2nw.png");

  var diagCS = Array(2).fill("http://russcon.org/RussCon/carcassonne/city2nws.png");

  var cityTR = Array(2).fill("http://russcon.org/RussCon/carcassonne/city11ne.png");

  var cityLR = Array(3).fill("http://russcon.org/RussCon/carcassonne/city11we.png");

  var city1 = Array(5).fill("http://russcon.org/RussCon/carcassonne/city1.png");

  var cityR = Array(1).fill("http://russcon.org/RussCon/carcassonne/city3r.png");

  var cityRS = Array(2).fill("http://russcon.org/RussCon/carcassonne/city3sr.png");

  var diagCR = Array(3).fill("http://russcon.org/RussCon/carcassonne/city2nwr.png");

  var diagCRS = Array(2).fill("http://russcon.org/RussCon/carcassonne/city2nwsr.png");

  var cloisterR = Array(2).fill("http://russcon.org/RussCon/carcassonne/cloisterr.png");

  var starterL = Array(3).fill("http://russcon.org/RussCon/carcassonne/city1rse.png");

  var starterR = Array(3).fill("http://russcon.org/RussCon/carcassonne/city1rsw.png");

  var starterish = Array(3).fill("http://russcon.org/RussCon/carcassonne/city1rswe.png");

  var starter = Array(3).fill("http://russcon.org/RussCon/carcassonne/city1rwe.png");

  var end4 = Array(1).fill("http://russcon.org/RussCon/carcassonne/road4.png");

  var end3 = Array(4).fill("http://russcon.org/RussCon/carcassonne/road3.png");

  var straight = Array(8).fill("http://russcon.org/RussCon/carcassonne/road2ns.png");

  var elbow = Array(9).fill("http://russcon.org/RussCon/carcassonne/road2sw.png");

  var cloister = Array(4).fill("http://russcon.org/RussCon/carcassonne/cloister.png");

  var orderedTileImages = end4.concat(end3, straight, cloister, elbow, starter, starterish, starterL, starterR, cloisterR, diagCR, diagCRS, cityR, cityRS, city1, cityTR, cityLR, diagCS, diagC, straightCS, straightC, city3S, city3, city4);

  tileImages = shuffle(orderedTileImages);

}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getMeepleImageList() {
  meepleImages = [
    "https://lh3.ggpht.com/eesS5ZUXntYl_oGUKEMr6S7L8Kb9QFhrTXqbYYVm7YEZI5MWSrRzOejnA1YmMwzZ7JHy=w300",

    "http://pycarc.googlecode.com/svn/trunk/data/meeple.png"
  ];
}

function selectTileImage() {
  var tileImage = tileImages.pop();
  return tileImage;
}

function selectMeepleImage(playerNum) {
  return meepleImages[playerNum];
}
