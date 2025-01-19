type Mammal = {
  speak(): string;
  breed: string;
}

/**
 * satisfies演算子は、値が特定の型を満たしているかをチェックする
 * as との違いは、余剰プロパティを許可しない
 */
const cat = {
  speak: () => "meow",
  breed: "persian",
} satisfies Mammal;
