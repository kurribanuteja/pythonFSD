let Name = 'John';
let Admin;
Admin = Name;
alert(Admin);

for (let i=0;i<5;i++){
    let str="";
    for (let j=5;j>i;j--){
        str+=" ";
    }
    for(let k=0; k<=i;k++){
        str+="*";
    }
    for(let l=1;l<=i;l++){
        str+="*";
    }
    console.log(str);
}
for (let i=5;i>=0;i--){
    let str="";
    for (let j=5;j>i;j--){
        str+=" ";
    }
    for(let k=0; k<=i;k++){
        str+="*";
    }
    for(let l=1;l<=i;l++){
        str+="*";
    }
    console.log(str);
}


let nums = [1, 2, 3, 4, 5, 6];
let target = 9;
function FindInd(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                console.log([i,j])
            }
        }
    }
};
console.log(FindInd(nums, target));


let x=121;
function PD(x){
    if (x < 0) {
      return false;
    }
    if (x < 10) {
      return true;
    }
    if (x % 10 === 0 && x !== 0) {
      return false;
    }
    let str = x;
    let i = 0, j = str.length - 1;
  
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };
  console.log(PD(x));

  function romanToInt(str){
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      const curr = roman[str[i]];
      const next = roman[str[i + 1]];
      (curr < next) ? (num -= curr) : (num += curr);
    }
    return num;
  };
  
  console.log(romanToInt('IV'));
  console.log(romanToInt('VIII'));