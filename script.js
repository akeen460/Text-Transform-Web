
const textbox = document.getElementById('dis1');

const capita = document.getElementById('normal');
const upper= document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const clear = document.getElementById('clear');
const test = document.getElementById('test');

let display1 = document.getElementById('dis1');


const dis2 = document.getElementById('dis2')




lower.addEventListener('click', function(){
    
    dis2.style.textTransform = 'lowercase';
})
upper.addEventListener('click', function(){
   
    dis2.style.textTransform = 'uppercase';
})
capita.addEventListener('click', function(){
    
   dis2.style.textTransform = 'capitalize';
})
clear.addEventListener('click', function(){
   dis2.value = ' ' ;
   display1.value = ' ';

})

test.addEventListener('click', function(){
  
   dis2.style.fontFamily = '\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif';
  

})
setInterval(() => {
    dis2.value = display1.value;
}, 1000);






