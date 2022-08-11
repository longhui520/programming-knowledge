function quickSort(arr,left,right){
  if(left>=right){
    return arr
  }
  const fn = (arr,left,right)=>{
    const stand = arr[left]
    while(left<right){
      while(left<right && arr[right]>stand){
        right--
      }
      if(left<right){
        arr[left++]=arr[right]
      }
      while(left<right&&arr[left]<=stand){
        left++
      }
      if(left<right){
        arr[right--]=arr[left]
      }
    }
    arr[left]=stand
    return left
  }
 const mid = fn(arr,left,right)
 quickSort(arr,left,mid-1)
 quickSort(arr,mid+1,right)
 return arr
}
function insertSort(arr){
  for(let i=1;i<arr.length;i++){
    const temp = arr[i]
    if(arr[i]<arr[i-1]){
      for(var j=i-1;j>=0;j--){
        if(arr[j]>temp){
          arr[j+1]=arr[j]
        }
      }
      arr[j+1]= temp
    }
  }
  return arr
}
function selectSort(arr){
  for(let i=0;i<arr.length;i++){
    let min = i
    for(let j=i;j<arr.length;j++){
      if(arr[j]<arr[min]){
         min = j
      }
    }
    [arr[i],arr[min]]=[arr[min],arr[i]]
  }
  return arr
}
function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  return arr 
}
//console.log(insertSort([2,1,3,9],0,3)) 
function knapsack(weight,value,w){
  const n = weight.length-1
  const f= [[]]
  for(let j=0;j<=w;j++){
    if(j<weight[0]){
      f[0][j]=0
    }else{
      f[0][j]=value[0]
    }
  } 
  for(let j=0;j<=w;j++){
    for(let i=1;i<=n;i++){
      if(!f[i]){  
        f[i]=[]
      }
      if(j<weight[i]){
        f[i][j]=f[i-1][j]
      }else{
        f[i][j]=Math.max(f[i-1][j],f[i-1][j-weight[i]]+value[i])
      }
    }
  }
  return f[n][w]
}
console.log(knapsack([2,2,6,5,4],[6,3,5,4,6],10))