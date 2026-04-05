//console.log(2>1) // basic comparisions
//console.log(2>=1)
//console.log(2==1)
//console.log(2!=1)

//console.log("2">1) //it directly converts the string datatype into number which can cause accurate predictibility issues.
//console.log("2"==1)
//console.log("2"===1) //strict check(double equal) even checks the datatype of the values given.

// let's see how it works with null
//console.log(null>0)// returing false
//console.log(null==0)// returning false
//console.log(null>=0)// returning true , wait a min , what the heck?? 
// The reason is that equality check == and comparisions[>,<,<=,>=] work differently.
// comparision converts null to a number treating it as 0, that is why null>0 is false while null>=0 is true.
// same thing goes with undefined datatype

// the essence is comparision and equality check works differently in javascript

