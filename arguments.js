function sum1() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// console.log(sum1(1, 2, 3, 4)); // => 10
// console.log(sum1(1, 2, 3, 4, 5)); // => 15

function sum2(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}
// console.log(sum2(1, 2, 3, 4)); // => 10
// console.log(sum2(1, 2, 3, 4, 5)); // => 15

class Cat {
    constructor(name) {
      this.name = name;
    }
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
  }
    
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
    
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");

Function.prototype.myBind1 = function(context) {
  let args = Array.from(arguments).slice(1);
  let that = this;
  return function() {
    let callArgs = Array.from(arguments);
    return that.apply(context, args.concat(callArgs));
  };
};

// markov.says("meow", "Ned"); // Markov says meow to Ned!
// markov.says.myBind1(pavlov, "meow", "Kush")(); // Pavlov says meow to Kush!
// markov.says.myBind1(pavlov)("meow", "a tree"); // Pavlov says meow to a tree!
// markov.says.myBind1(pavlov, "meow")("Markov"); // Pavlov says meow to Markov!
// const notMarkovSays = markov.says.myBind1(pavlov);
// notMarkovSays("meow", "me"); // Pavlov says meow to me!

Function.prototype.myBind2 = function(context, ...args) {
  let that = this;
  return function(...callArgs) {
    return that.apply(context, args.concat(callArgs));
  };
};

// markov.says("meow", "Ned"); // Markov says meow to Ned!
// markov.says.myBind2(pavlov, "meow", "Kush")(); // Pavlov says meow to Kush!
// markov.says.myBind2(pavlov)("meow", "a tree"); // Pavlov says meow to a tree!
// markov.says.myBind2(pavlov, "meow")("Markov"); // Pavlov says meow to Markov!
// const notMarkovSays = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me"); // Pavlov says meow to me!


function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, val) => acc + val);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

const sum = curriedSum(4);
sum(5)(30)(20)(1); // => 56