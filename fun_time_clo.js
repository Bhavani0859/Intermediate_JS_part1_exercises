//exercise of Intermediate JS part1 about Higher order functions ,Timers and Clousers

/*function called countdown that accepts a number as a parameter and every 1000 milliseconds 
decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.*/
function countDown(time){
    var timeID= setInterval(function(){
        time--
        if(time<=0){
            clearInterval(timeID)
            console.log("DONE!")
        }
        else{
            console.log(time)}
    },1000)
};
countDown(5)

/*function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each
 time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer 
 and return the number of tries it took before we found a number greater than .75.*/
function randomGame(){
    var num, count=0;
    var timeId = setInterval(function(){
      num = Math.random();
      //console.log(num)
      count++
      if(num > .75) {
        clearInterval(timeId);
        console.log("Number of tries=" + count );
      }
    },1000)
  }
  randomGame()

//function to check a number is even or not
function isEven(num){
    if(num%2==0){
        return true
    }
    return false
}
console.log(isEven(5))
console.log(isEven(6))

//function to check a number is odd or not
function isOdd(num){
    if(num%2==0){
        return false
    }
    return true
}

//function to check a number is prime or not
function isPrime(num){
    let count=0
    for(let i=1;i<=num;i++){
        if(num%i ==0){
            count++
        }
    }
    if(count==2){
        console.log("is prime")
        return true}
    console.log("not prime")
    return false
}
isPrime(5)
isPrime(10)

/*function called numberFact which takes in a number and a callback 
and returns the result of the callback with the number passed to it*/
function numFact(num,callBack){
    callBack(num)
    //console.log("numFact")
}
numFact(10,isPrime)
numFact(5,isOdd)
numFact(4,isEven)

/*function called find. It should take in an array and a callback 
and return the first value found in the array that matches the condition.*/
function find(array, fn){
    for(let i=0; i< array.length;i++){
        if (fn(array[i])) 
            return array[i]
    }
}
find([8,11,4,27], function(val){return val >= 10});

/* function called findIndex. It should take in an array and a callback and 
return the index of first value found in the array that matches the condition.*/
function findIndex(array, fn){
    for(let i=0; i< array.length;i++){
        if (fn(array[i])) 
            return i
    }
}
findIndex([8,11,4,27], function(val){return val >= 10});


/*function called specialMultiply which accepts two parameters. If the function is passed both parameters,
 it should return the product of the two. If the function is only passed one parameter -
  it should return a function which can later be passed another parameter to return the product.
   You will have to use closure and arguments to solve this.*/
function specialMultiply(a,b){
    if(arguments.length === 1){
      return function(b){
        return a*b;
      }
    }
    return a*b;
  }

console.log(specialMultiply(10,2))
console.log(specialMultiply(10))

  