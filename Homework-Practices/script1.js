// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    
    console.log(listOfNeighbours[i]);
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(listOfNeighbours[i][j]);
    }

}

for (let i = 0; i < listOfNeighbours.length; i++) {
    const neighbour = listOfNeighbours[i];
    console.log(neighbour);
    for (let j = 0; j < neighbour.length; j++) {
        console.log(neighbour[j]);
    }

}

