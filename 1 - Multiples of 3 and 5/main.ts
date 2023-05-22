function multiples(num : number) : number {
    let sum : number = 0;
    for(let i=0;i<num;i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum+=i;
      }
    }
    return sum;
  }
  
  multiples(1000);

