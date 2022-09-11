const getQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const quote = await res.json();
    const num = Math.floor(Math.random()*quote.length);
    console.log(num);
}
getQuote()