function Car(name) {
  this.name = name;
  this.count = 0;
}

function makeNewCars(carNamesArray) {
  return carNamesArray.map((name) => new Car(name));
}

const carList = makeNewCars(['yujo', 'dohkim', 'jilim', 'sohpark']);

function getRandomNumber() {
  const min = 0;
  const max = 10;

  return Math.floor(Math.random() * (max - min)) + min;
}

function race(car) {
  if (getRandomNumber() > 3) {
    car.count++;
  }
}

function printResult(carList, racingCount) {
  while (racingCount--) {
    carList.forEach((car) => race(car));
    console.log(carList);
    console.log(racingCount);
  }
}

printResult(carList, 3);
