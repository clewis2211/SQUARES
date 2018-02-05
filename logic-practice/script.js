// const myOrange = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,
//                 ,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,56
//             ,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

//             for(let i = 0; i < myOrange.length; i++){
//                 var orange = myOrange[i];
//                 if(i % 2 === 0){
//                     console.log(orange);
//                 } else if( i % 5 === 0){
//                     console.log((orange));
//                 } else{
//                     console.log(orange);
//                 }
//             }

// let first = 'john';
// let last = 'smith';

// function person(name){
//     console.logd(this);
//     this.name = name; 
// }

// person.prototype.sayHey = () => {
//     console.log(name);
// }

// person.prototype.sayName = () => {
//     console.log(name);
// }

// sayHey(first);
// sayName(last)



// const test = 'test';
// console.log(test.toLocaleUpperCase());



 function heyNow(name, age){
    this.name = name;
    this.age = age;
}

heyNow.prototype.myPerson = () => {
    console.log(this.name + ' is ' + this.age + ' years old');
}
const carlton = 'Lewis';
const lewis = 'Carlton';
myPerson();


function Shape(triangle, square, circle){
    this.triangle = triangle;
    this.square = square;
    this.circle = circle;

}

Shape.prototype.move = () => {
    console.log('triangle');
}

const tri = new Shape('tri');

tri.move();


Shape.prototype.up = () => {
    console.log('up');
}

tri.up();
