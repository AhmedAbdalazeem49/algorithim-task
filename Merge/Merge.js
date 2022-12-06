
function sortArray(Array){
  for(let i = 0 ; i < Array.length - 1 ; i++){
    for(let j = Array.length ; j > (i + 1); j--){
      if(Array[j] < Array[j - 1]){
        let swapHelper = Array[j];
        Array[j] = Array[j - 1] ;
        Array[j - 1] = swapHelper;
      };
    };
  };
  return Array ;
};

let numbers = [10 , 30 , 23 ,  90 , 12 , 53 , 87 , 90 , 76 , 100 , 19 , 29 , 96];

let button = document.getElementById("btn");

let show = document.getElementById("show");

let result =
 `We have Sorted your Array: ${numbers} using "Bubble Sort"
 As it has become: ${sortArray(numbers)} .`
  show.innerHTML = result;

 button.onclick = function showsorted(){
   show.style.display = "block";
 }