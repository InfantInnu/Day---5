// 1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
var arr=[1,2,3,22,23,36,35,14,15,18];
var temp=[];
function odd(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2===1){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(odd(arr));


// b.Convert all the strings to title caps in a string array
var person="this is infant";
(function (person){
    person=person.split(" ")
    for(i=0;i<person.length;i++){
        var temp=person[i];
        temp=temp[0].toUpperCase();
        temp=temp+person[i].slice(1,person[i].length)
        person[i]=temp
    }
    console.log(person.join(" "))
}(person));


// c.Sum of all numbers in an array
var sum=0;
function add(...num){
    // console.log(num);
    for(var i=0;i<num.length;i++){
        sum=sum+num[i];
    }
    return sum;
}
console.log(sum())

// d.Return all the prime numbers in an array
var res=[2,3,4,5,6,7,8,9,13,14,16,17,18,19,20];
(function(res){
    var temp=[];
    for(i=0;i<res.length;i++){
        var flag=true;
        for(j=2;j<res[i];j++){
            if(res[i]%j==0){
                flag=false;
                break;
            }
         } if(flag==true)
         temp.push(res[i]);
    }
    console.log(temp);

}(res));

//e.Return all the palindromes in an array
var arr=[1,11,343,411,575,600,7887,80108,999,11];
(function(a){
    var temp=[];
    var result="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        result+=a[i];
        var count=0 ;
        
        for(j=0;j<result.length;j++)
        {
            if(result[j]===result[((result.length-1)-j)])
            {
                count++ ;
                }
        }
        if(count===result.length)
        {
            ans+=result+" " ;
        }
        result="";
        temp.push(arr[i]);
    }
    console.log(ans);
 
}) (arr);

// f.Return median of two sorted arrays of the same size
let arr1=[1,12,15,26,38,43];
let arr2=[2,13,17,30,45,47];
(function(arr1,arr2){
    var concat=arr1.concat(arr2).sort((a,b)=>a-b);
    var length=concat.length;
    if(length%2==1){
        console.log("The median is:",concat[((length)/2)-0.5]);
    }
    else{
        console.log("The median is:",(concat[length/2]+concat[(length/2)-1])/2)
    }
})(arr1,arr2);

// g.Remove duplicates from an array
var arr=["x","w","d","w","x"];
function  filterDuplicates(new_arr){
    return new_arr.filter((value,index)=>new_arr.indexOf(value)===index);
}
console.log(filterDuplicates(arr));

// h.Rotate an array by K times:
const cool=[1,2,3,6,7,8,9,10];
const k=3;
let rotatedcool=function(cool,rotation){
    const toRotate=cool.concat();
    for(let i=0;i<rotation;i++){
        const elements=toRotate.shift();
        toRotate.push(elements);
    }
    return toRotate;
}
console.log(rotatedcool(cool,k));


// 3.Do the below programs in arrow functions

// a.Print odd numbers in an array
let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let odds=array.filter(n=>n%2===1)
console.log(odds);

// b.Convert all the strings to title caps in a string array
function getTitleCase(str){
    return str
    .split(' ')
    // split the string into an array of words using the split() method
    // use the map() method to convert each word to title case
    .map(word=>{
        return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    }) 
    .join(' ');
    // use the join() method to join the words into a single string
    }
    console.log(getTitleCase('this is infant'));

// c.Sum of all numbers in an array
var addition =(a,b,c,d,e)=>a+b+c+d+e;
console.log(addition(10,2,3,1,4,));

// d.Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

// e.Return all the palindromes in an array
const palindromes = [1, 5, 7, 4, 15, 4, 7, 5, 1];
const isPalindrome1 = awesome=>{
   const { length: l } = awesome;
   const mid = Math.floor(l / 2);
   for(let i = 0; i <= mid; i++){
      if(awesome[i] !== awesome[l-i-1]){
         return false;
      };
   };
   return true;
};
console.log(isPalindrome1(palindromes));






    







