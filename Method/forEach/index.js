function Friend(name, age) {
  this.name = name;
  this.age = age;
}

const friendList = [
  new Friend('kim', 25),
  new Friend('jeon', 26),
  new Friend('lim', 22),
  new Friend('park', 23),
];

const getRandomNumber = () => {
  const min = 0;
  const max = 10;

  return Math.floor(Math.random() * (max - min)) + min;
};

function race(friend) {
  if (getRandomNumber() > 3) {
    friend.age++;
  }
}

function friendRace(friendList, count) {
  const $box = document.querySelector('.test-box');

  while (count--) {
    friendList.forEach((friend) => race(friend));
    friendList.forEach((friend) =>
      $box.insertAdjacentElement(
        'beforeend',
        `${friend.name} : ${friend.age} <br>`,
      ),
    );
  }
}

friendRace(friendList, 3);
