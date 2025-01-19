/**
 * アンビエント宣言
 * 外部から提供される変数が存在することをTypeScriptコンパイラに伝える
 */
declare var process: any;

// process.env.NODE_ENV undefined
console.log("process.env.NODE_ENV", process.env.NODE_ENV);


// ReferenceError: foobar is not defined
declare var foobar: any;
console.log({ foobar });
