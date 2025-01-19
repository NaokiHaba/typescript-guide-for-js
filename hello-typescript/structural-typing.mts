class C {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

type T = {
  name: string;
}

// T・C は同じ構造を持っているため、互換性がある
const t: T = new C("instance of C");
const c: C = t;

// C { name: 'instance of C' }
console.log(t);
// C { name: 'instance of C' }
console.log(c);
