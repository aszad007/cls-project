const text = document.querySelector('.quote');
const author = document.querySelector('.author');
const nextbtn = document.getElementById('new-quote');
const sharebtn = document.querySelector('.share-btn');
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

nextbtn.addEventListener('click', getQuote);
sharebtn.href = `https://twitter.com/intent/tweet?text=${quote} - ${authorName}`;

