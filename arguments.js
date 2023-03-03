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

Function.prototype.myBind = function(ctx) {
    let args = Array.from(arguments).slice(1);
    let that = this;
    return function() {
      let callArgs = Array.from(arguments);
      return that.apply(ctx, args.concat(callArgs));
    };
  };
  