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

const t = {
  name: "instance of C",
}

// プロパティ 'age' は型 '{ name: string; }' にありませんが、型 'C' では必須です。ts(2741)
const c: C = t;

// C { name: 'instance of C' }
console.log(c);
