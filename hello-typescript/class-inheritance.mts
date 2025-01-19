class Base {
  hello() {
    console.log("This is Base");
  }
}

class Derived extends Base {
  hello() {
    console.log("This is Derived");
  }
}

const base = new Base();
// This is Base 
base.hello();

const derived = new Derived();
// This is Derived
derived.hello();
