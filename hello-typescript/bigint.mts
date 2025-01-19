import assert from "node:assert";
import test from "node:test";

const bigintA = 100n;
const bigintB = BigInt(100);
const bigintC = BigInt("100");

const bigintD = BigInt(Number.MAX_SAFE_INTEGER) + 1n;

test("bigint", () => {
  assert.equal(bigintA, 100n);
  assert.equal(bigintB, 100n);
  assert.equal(bigintC, 100n);
  assert.equal(bigintD, 9007199254740992n);
});

