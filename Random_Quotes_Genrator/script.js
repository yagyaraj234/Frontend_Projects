// https://type.fit/api/quotes



//  function randomGen() {
//     Math.floor(Math.random()*1500)+1;
//  }

// var rando = document.getElementById('newQt').onclick()=randomGen()=>{

// };





//     console.log(rando);

let realdata=" ";
const quotes =document.getElementById('quotes');
const author =document.getElementById('author');
const newQt =document.getElementById('newQt');
let quotesData="";

const getNewQuotes =()=>{
    let rNum =Math.floor(Math.random()*1500)+1;
    quotesData =realdata[rNum];
    quotes.innerText =`${quotesData.text}`;
    if(quotesData.author ==null){
        author.innerText="~ unknown";
    }
    else{
        author.innerText =`~ ${quotesData.author}`;

    }
};

const getQuotes = async()=>{
    const api ="https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realdata =await data.json();
        getNewQuotes();
        // console.log (realdata[rNum].author);
        // console.log (realdata[rNum].text);
            
        
    } catch (error) {
        
    };
}
newQt.addEventListener('click',getNewQuotes);
getQuotes();