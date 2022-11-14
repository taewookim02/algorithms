////////////////////////////////////////
// reference type
// [] === [] // false, this is due to arrays being objects
// [1] === [1] // fale

var obj1 = { val: 10 };
var obj2 = obj1;
var obj3 = { val: 10 };

obj1 === obj2; // true
obj1 === obj3; // false

////////////////////////////////////////
//context vs scope
function b() {
  let a = 4; // a only lives in this function scope
}
// in the context of web browsers,
this === window; // true
this.alert('Hello');
window.alert('Hello');

function a() {
  console.log(this); // window
}
window.a();

const object4 = {
  a: function () {
    console.log(this); // object a
  },
};

////////////////////////////////////////
//instantiation

class Player {
  constructor(name, type) {
    console.log('player', this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('wizard', this);
  }
  play() {
    console.log(`WEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('DShelly', 'Warrior');
const wizard2 = new Wizard('Ganggang', 'Healer');
