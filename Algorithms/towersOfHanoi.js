function move(numberOfDiscs, from, to, inter) {
  if (numberOfDiscs === 1) {
    console.log(`Move disc 1 from ${from} to ${to}`);
  }
  else {
    move(numberOfDiscs - 1, from, inter, to);
    console.log(`Move disc ${numberOfDiscs} from ${from} to ${to}`);
    move(numberOfDiscs - 1, inter, to, from);
  }
}

move(5, 'A', 'B', 'C');
