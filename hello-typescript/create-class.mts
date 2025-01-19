// 1. クラスを拡張するための関数
function createExtenderClass<Class extends new (...args: any[]) => any>(baseClass: Class) {
  return class ExtendedClass extends baseClass {
    customMethod() {
      console.log("This is custom method");
    }
  }
}

// 2. 基本となるクラス
class MyBaseClass {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

// 3. 実際の使用
const myClass = createExtenderClass(MyBaseClass);  // MyBaseClassを拡張した新しいクラスを作成
const instance = new myClass("John");             // 新しいクラスのインスタンスを作成
instance.sayHello();      // "Hello, John" を出力
instance.customMethod();   // "This is custom method" を出力
