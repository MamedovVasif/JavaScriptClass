 #region tek eded cemi
let arr = [1,2,4,5,6,7,8,9,10];
function arrtek(arr){
    let sum=0
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]%2!=0){
            sum+=arr[i];
        }
      
    }
    return sum;
  
}
console.log(arrtek(arr));
#endregion
#region 
let arr = [1,2,4,5,6,7,8,9,10];
let sum =0;
function summary(){
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}
console.log(summary(arr))
#endregion
