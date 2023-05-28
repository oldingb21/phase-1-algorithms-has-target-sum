function hasTargetSum(array, target) {
  let i = 0  
  while (i < array.length) {
    let j = i+1  
    while (j < array.length) {
        let sum = array[i]+array[j];
        console.log(sum)
        if (sum === target){
          return true
        } 
      j++ 
    }
  i++  
  }
  return false
}

/* 
O(n**2)
  Write the Big O time complexity of your function here
*/

/* 
 Function that takes 2 arguments, an array of numbers, and a target 
  number to check the sum of numbers in the array against
    -cycle through the array adding 2 numbers in the array checking if 
    they equal the target sum given as an argument. 
    -if sum === target sum return true
    -else return false
*/

/*
-I was getting NaN as a result of some of the math equations using a for
loop, so I switched to a while loop to simplify the code and try to get
at the heart of the issue. 
-I used 2 while loops, the first while loop takes a number at index i and
in the second while loop adds it to the number at index j, the second loop
iterates through the rest of the array and adds it to i checking if
the sum = the target. the in the next iteration for the first loop it starts 
at the index at 1 and iterates over the rest of the array adding it to the
number at index 1, comparing it to the target each time. If the loop goes
through every iteration and the condition is never met in the if statement,
the function returns false.
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
