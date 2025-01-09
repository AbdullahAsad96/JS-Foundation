// console.log("control majnu");
// let age =32;
// console.log(age+'ads');
   /// Null
// const NullNum=null
// console.log(NaN==NullNum);

// discussion of let var and const
if(true){
   let num1=20; //can't be intailized more then once in the same block  
   var num2=30;    //can be intialized more then once in same block/ Scope 
   const num3="1001"; //just like a constants you can't update their values
}
// console.log(num2); //executed // because var can be accessed outside the scope.
// console.log(num1, num3) // let and const can't be accessed outside the scope of function or outside of a block e.g block=if{....}

// let nums =[1,2, 3];
// let num23=nums;
// console.log(nums==num23)

// console.log(10.0 === 10);

// Math-functions
const Pi= Math.PI
// console.log(Pi);
// console.log(Math.round(Pi)); //3
// console.log(Math.floor(Pi));  //3
// console.log(Math.ceil(Pi));  //4 
// console.log(Math.random());
// console.log(Math.min(2,3,4,5,6,7,8));
// console.log(Math.max(12,234, 345.6, 23, 10, 0));\
// console.log(Math.log(10));
       
// randdom number btw 0 to 10
// let num=Math.random();
// let randomNum=num * 11;
// console.log(randomNum);


//....//
// string:
// string-concatenation
// let str="Asad";
// const name="codeX  .";
// console.log(str+name);

// intersting facts
// console.log("1"+2); //ans=12
// console.log(5-"3"); // ans=2
// ..//
// hoisting
// let greetings;
// console.log(greetings); // answer= undefined
// greetings ="Hello g \n kiya haal hai?\t.";
// console.log(greetings);

// type checking
// let a;
// console.log(typeof a); //undefined
// let name="";
// const age=12;
// let gender='m';
// console.log(typeof(name), typeof age, typeof gender); // string, number, string 

//type conversion
// let score=1;
// let newscore=NaN;
// console.log(typeof newscore); // number
//
// score=Number(score)
// console.log(typeof score)
// convert string into number
let nam="Marco";
// nam=Boolean(nam)
// // console.log(typeof nam, nam); // boolean, true;
// nam=Number(nam);
// console.log(typeof nam , nam); // Number NaN
// convert int into string
let num=10;
// num=String(num);
// console.log(num, typeof num); //10, string 

