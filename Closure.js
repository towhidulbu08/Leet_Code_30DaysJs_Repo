/* P-01.var createCounter = function (n) {
  let variable = n;

  return function () {
    return n++;
  };
};

const counter = createCounter(10);
console.dir(counter); // 10
console.log(counter()); // 10
console.log(counter()); // 10
*/

// P-02. var expect = function (val) {
//   return {
//     toBe: function (val2) {
//       if (val2 === val) {
//         return true;
//       } else {
//         throw new Error("Not Equal");
//       }
//     },
//     notToBe: function (val3) {
//       if (val3 !== val) {
//         return true;
//       } else {
//         throw new Error("Equal");
//       }
//     },
//   };
// };

// try {
//   console.log(expect(5).toBe(null));
//   console.log(expect(5).notToBe(5));
// } catch (error) {
//   console.log(error.message);
// }

// P-03. var createCounter = function (init) {
//   let counterValue = init;

//   return {
//     increment: function () {
//       return ++counterValue;
//     },
//     decrement: function () {
//       return --counterValue;
//     },
//     reset: function () {
//       counterValue = init;
//       return counterValue;
//     },
//   };
// };

// const counter = createCounter(5);
// console.log(counter.increment()); // Output: 6

// console.log(counter.reset()); // Output: 5
// console.log(counter.decrement()); // Output: 4

// P-04. var map = function (arr, fn) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(fn(arr[i], i));
//   }
//   return output;
// };

// const newArray = map([1, 2, 3], () => 42);
// console.log(newArray);

/* P-05. var filter = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

var newArray = filter([1, 2, 3], (n, i) => i === 0);

console.log(newArray);*/
