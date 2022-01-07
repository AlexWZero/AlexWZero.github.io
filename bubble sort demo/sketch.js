// Bubble Sort

let someList = [5,15,3,8,9,1,20,7];

function selectionSort(aList) {
  let swapLoc = aList.length-1;
  
  while (swapLoc > 0) {
    let highestLoc = 0;

    // one pass
    for (let current = 0; current <= swapLoc; current++) {
      if (aList[current] > aList[highestLoc]) {
        highestLoc = current;
      }
    }
    // swap
    let temp = aList[swapLoc];
    aList[swapLoc] = aList[highestLoc];
    aList[highestLoc] = temp;

    // decrease the swap location by 1
    swapLoc--;

    // to show each swap
    console.log(aList);
  }

  return aList;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(selectionSort(someList));
}

function draw() {
}
