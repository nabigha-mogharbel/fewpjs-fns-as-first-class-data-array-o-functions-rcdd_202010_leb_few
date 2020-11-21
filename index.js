

let bb="";
function wakeDog(dogName, dogBreed){
  bb="Wake "+dogName+" the "+dogBreed;
  return bb;
}
function leashDog(dogName, dogBreed){
  bb="Leash "+dogName+" the "+dogBreed;
  return bb;
}
function walkToPark(dogName, dogBreed){
  bb="Walk to the park with "+dogName+" the "+dogBreed;
  return bb;
}
function throwFrisbee(dogName, dogBreed){
  bb="Throw the frisbee for "+dogName+" the "+dogBreed;
  return bb;
}
function walkHome(dogName, dogBreed){
  bb="Walk home with "+dogName+" the "+dogBreed;
  return bb;
}
function unleashDog(dogName, dogBreed){
  bb="Unleash "+dogName+" the "+dogBreed;
  return bb;
}
const routine=[wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

let i=0;
let array=[];

const exerciseDog=function(dogName, dogBreed){
  for (i; i<routine.length; i++){
    routine[i]()()
  }
};
//for (i; i<routine.length; i++){(routine[i],routine[i](dogName, dogBreed));}}
     
exerciseDog(dogName, dogBreed);