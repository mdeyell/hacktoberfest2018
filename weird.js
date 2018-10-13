class weird {
   /*
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }*/
  weirdStuff(){
     var  i = Number.MIN_VALUE
     if ((i * i) == 0){
       console.log('WHY!!!!111!!');
     }
     if ((i +1) == 1){
      console.log('WHY!!!!111!!');
     }
     if ((i - 1) == -1){
      console.log('WHY!!!!111!!');
     }
     if ((i /i) == 1){
       console.log('WHY!!!!111!!');
     }
  }

  awaitTest(){
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}


addAsync(10).then((sum) => {
  console.log(sum);
});



  }
}
module.exports = weird;


