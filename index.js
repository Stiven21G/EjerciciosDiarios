class Solution {
    subarraySum(arr, n, s) {
       let sumaActual = 0;
        
        for(let i = 0;i < n; i++){
            while(sumaActual > s && i <= n){
                sumaActual -= arr[valorInicial];
                valorInicial++;
               }
            sumaActual += arr[i];

        if(sumaActual === s){
            return `${valorInicial + 1}${i + 1}`;
        }
    }  
            return -1;   
    }

}
let arr=[0];
let n= 1;
let s= 1;
let sol = new Solution();

console.log(sol.subarraySum(arr,n,s));

// class Solution {
//     binarysearch(arr, k) {
//        let indice = 0;
        
//        for(let i = 0; i<arr.length;i++){
//            if(arr[i]===k){
//                indice = i;
//                return indice;
//            }
          
              
           
//        }
//         return -1;
//     }
// }

// let arr=[]
// let n= 1;
// let s= 5;
// let sol = new Solution();