// Getting Elements by class and ID 
const text = document.querySelector('.quote');
const author = document.querySelector('.author');
const nextbtn = document.getElementById('new-quote');
const sharebtn = document.querySelector('.share-btn');
// Function for getting quotes
const getQuote = async () => {
    // API key 
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json();
    const num = Math.floor(Math.random()*quotes.length);
    const item = quotes[num]; 
    const quote = item.text;
    // seprating Author Name and Quotes from API Key
    const authorName = item.author;
    text.innerText = quote;
    author.innerText = authorName;
}
// Adding function in Next btn and Share btn 

nextbtn.addEventListener('click', getQuote);
sharebtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`;

