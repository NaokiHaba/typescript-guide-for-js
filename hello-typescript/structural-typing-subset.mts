class C {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type T = {
  name: string;
}

const t: T = new C("instance of C", 10);

// C { name: 'instance of C', age: 10 }
console.log(t);
