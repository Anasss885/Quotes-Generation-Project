let body=document.querySelector('body');
body.style.backgroundColor='green';
let btn=document.querySelector('button');
//btn=addEventListener('click', Generate_Quote);
const arr_quotes =[
{
    'author':'Anoos',
    'quote':"it does not matters how slowly you go , Do not stop"
},
{
    'author':'Albert Enisten',
    'quote':"Nothing Happens until something moves"
},
{
    'author':'Unknown',
    'quote':"if the opprtunity doesn't Knock Build a door"
},
{
    'author':'Elon Musk',
    'quote':"Patience is a virtue, and I'm learning patience. It's a tough lesson"
},

];
function Generate_Quote()
{
    const rnd=Number.parseInt(Math.random()*arr_quotes.length);
    document.querySelector('#Author').textContent=arr_quotes[rnd].author;
    document.querySelector('#Quote').textContent=arr_quotes[rnd].quote; 
}



