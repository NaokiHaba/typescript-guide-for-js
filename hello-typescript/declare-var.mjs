"use strict";
// process.env.NODE_ENV undefined
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
// ReferenceError: foobar is not defined
// declare var foobar: any;
// console.log({ foobar });
function hello(name) {
    return "Hello, " + name;
}
hello("taro");
export {};
