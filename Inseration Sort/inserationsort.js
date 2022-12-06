
function sortArray(Array){
  for(let j = 1 ; j < Array.length - 1 ; j++){

    let key = Array[j];
    let i = j - 1 ;

    while(i >= 0 && Array[i] > key){

      Array[i + 1] = Array[i];
      i = i - 1 ;
    }

    Array[i + 1] = key;
  }
  return Array;
};

let numbers = [17 , 12 , 20 , 90 , 32 , 76 , 1 , 79 , 100];

let button = document.getElementById("btn");

let show = document.getElementById("show");

show.innerHTML = `We have sorted your Array: ${numbers} using "Inseration Sort" 
As it has become ${sortArray(numbers)}.`;

button.onclick= function showSort(){
  show.style.display = "block";
};