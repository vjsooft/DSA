// Q: Generate 10 random integers between 0 to 10 with repetition.
// Q: Generate 10 random integers between 0 to 100 without repetition.
// # OR: Generate 10 unique random integers between 0 to 100.


/*
integer is a real number without fraction part / decimal
for exp: -3, -2, -1, 0, 1,2,3,4, 
*/ 
/**
 * 
 Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
 Math.random()
    0.8651347242121346
    0.9534742440201776
    0.7773953594386152
    0.8658654609403194
    0.04457724921551609
    0.42709812316405693
    0.7594453861603874
    0.0967272184753154
    0.9298686034229398
    0.8804509749998348

    Description
    The Math.floor() method rounds a number DOWN to the nearest integer.
    if number is posative, it's fraction part will be removed and only integer will be left like
    console.log( Math.floor(0.9)); ============0
    console.log( Math.floor(1.9)); ============1
    console.log( Math.floor(2.9)); ============2
    console.log( Math.floor(3.559)); ============3
    Exp:-

    console.log( Math.floor(0.9));
    console.log( Math.floor(1.9));
    console.log( Math.floor(2.9));
    console.log( Math.floor(3.559));
    console.log( Math.floor(100.559));
    console.log( Math.floor(-0.9));
    console.log( Math.floor(-3.559));
    Output:=
    0
    1
    2
    3
    100
    -1
    -4
 */

//  for( let i = 0; i <10; i++){
//     // console.log(Math.random());
//     // console.log(Math.random()*10);
//   console.log(  Math.floor(Math.random()*10));
//  }

for( let i = 0; i <10; i++){
   // console.log(Math.random());
   // console.log(Math.random()*10);
 console.log(  Math.floor(Math.random()*100));
}
/*
it's producing interger between o to 10 with repeation
output:-
6
0
3
4
8
4
3
3
9
7
*/

//  Math.floor()

// console.log( Math.floor(0.9));
// console.log( Math.floor(1.9));
// console.log( Math.floor(2.9));
// console.log( Math.floor(3.559));
// console.log( Math.floor(100.559));
// console.log( Math.floor(-0.9));
// console.log( Math.floor(-3.559));


// Q: Uses of for loop

 /*
 1:- iteration on an array
 2:- do somthing an number of times 
 */

//


 