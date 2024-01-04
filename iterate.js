var myBio=[{
    "name" :"deva",
    "age" : "23",
    "gender":"male",
    "location":"trichy",
    "married status":"single",
    
    "for":"🤓....for loop.....🤓",
    "for1":"🤓....for in....🤓",
    "for2":"🤓....for of.....🤓",
    "for3":"🤓....for each.....🤓",

}];


//.........forloop..........//

for (var i=0; i<myBio.length; i++){
var bb=myBio[i];
console.log(bb.for);
console.log(bb.name);
console.log(bb.age);
console.log(bb.gender);
console.log(bb.location);

}

//........for in........//
for(var me in myBio){
    console.log(myBio[me].for1);
    console.log(myBio[me].name);
    console.log(myBio[me].age);
    console.log(myBio[me].gender);
    console.log(myBio[me].location);
} 

//.......for of.......//

for(var a of myBio){

console.log(a.for2);
console.log(a.name);
console.log(a.age);
console.log(a.gender);
console.log(a.location);
}

//.......for each.......//

myBio.forEach(function(bb) {

    console.log(bb.for3);
    console.log(bb.name);
    console.log(bb.location);
    console.log(bb.age);
    console.log(bb["married status"]);
});

