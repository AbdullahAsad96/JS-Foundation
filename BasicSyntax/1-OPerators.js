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
// let len=str.length-1;
// console.log(str[len]); // last index is 3 and at 3 there is 'd'
// there are some string functions like replace(value to b replace, value to replace with ), uppercase, lowercase, trim(), spilt(), substring(1st letter, to last letter(last one skiped)), includes("string check"), chatAt(), charCodeAt(), indexOf(), lastIndexOf(), startwith(), endwith(), concate(), match(), search(),;


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
//|  Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.  |
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
nam=parseInt(nam);
// console.log(typeof nam , nam); // Number NaN
// convert int into string
let num=10;
// num=String(num);
// console.log(num, typeof num); //10, string 
// let ch='a';
// console.log(typeof ch); // string
//float to int
// let intnum=parseInt(num)
// console.log(typeof intnum, intnum);
// string to float

// let fltnum =parseFloat(nam);
// console.log(fltnum, typeof fltnum);

//date in JS
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.getDay);
// console.log("",myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
myDate=Date.now()
// console.log(typeof myDate);
let sarr=[1,2,3,4]
let varr=[1,2,3,4]
// console.log("hello world");

// string concatination
let word1= "Pakistan";
let word2= "is a muslim";
let word3= " country";
let concate_String=word1+word2+word3;
// console.log(concate_String) 

const lengthyString= "A string could be a single character or paragraph or a page.\
 If the string length is too big it does not fit in one line. \
 We can use the backslash character (\) at the end of each line \
  to indicate that the string will continue on the next line" ;
// console.log(lengthyString);

// escape sequence in string

/*
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/ 
// let num1=2;
// for(let i=1; i<=10; i++){
//    let temp=num1*i ; //2*1 =2, 2*2 =4, 2*3=6,\
//    console.log(`2 multiply by ${i} is equal to :`,temp);
// }

let Astring="majid ,wajid";
// console.log(Astring.length)
// console.log(Astring[4])
// console.log(Astring.toUpperCase())
// console.log(Astring.toLowerCase())
// console.log(Astring.substr(2,4))
// console.log(Astring.spilt(','))
// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(', '))
// console.log(Astring.split(","))

// data types
let challenge='30 days of javascript';
// console.log(challenge)
// console.log(challenge.length)
// console.log(challenge.toLocaleUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substring(0,2), challenge.substring(4,20))
// console.log(challenge.includes('script'))
// console.log(challenge.split(' '))
let companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(companies.split(','), typeof(companies));
companies=companies.split(',');
// console.log(typeof(companies))
// console.log(challenge.replace(challenge,"30 days of python"))
// console.log(challenge.charAt(4));

// console.log("hi 8043")
// console.log(challenge.charAt(9));
// console.log(challenge.charCodeAt(4))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))

let sentance="You cannot end a sentence with because because because is a conjunction";
// console.log(sentance.indexOf('because'))
// console.log(sentance.lastIndexOf('because'))

console.log(sentance.search('because'))

