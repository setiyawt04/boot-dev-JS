const withSubmit = true;

function describe(title, fn) {
  console.log(`\n🧪 ${title}`);
  try {
    fn();
  } catch (err) {
    console.error(`❌ Error in describe block: ${err.message}`);
  }
}

function it(desc, fn) {
  try {
    fn();
    console.log(`✅ ${desc}`);
  } catch (err) {
    console.error(`❌ ${desc}`);
    console.error(`   ${err.message}`);
  }
}

const assert = {
  strictEqual(actual, expected) {
    if (actual !== expected) {
      throw new Error(`Expected: ${expected}, but got: ${actual}`);
    }
  },
  deepEqual(actual, expected) {
    const a = JSON.stringify(actual);
    const b = JSON.stringify(expected);
    if (a !== b) {
      throw new Error(`Expected: ${b}, but got: ${a}`);
    }
  }
};

module.exports = { describe, it, assert, withSubmit };
