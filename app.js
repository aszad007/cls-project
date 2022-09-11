// document.getElementById('quote').innerHTML = quote;
// document.getElementById('author').innerHTML = author;
const text = document.querySelector('.quote');
const author = document.querySelector('.author');

const getQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json();
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num]; 
    const quote = item.text;
    const authorName = item.author;
    text.innerText = quote;
    author.innerText = authorName;
}
getQuote()