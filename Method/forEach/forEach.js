function Car(name) {
  this.name = name;
  this.count = 0;
}

const carList = [
  new Car('dohkim'),
  new Car('hjeon'),
  new Car('jilim'),
  new Car('sohpark'),
];

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
  }
}

printResult(carList, 3);
