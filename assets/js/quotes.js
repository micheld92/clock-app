/*https://www.youtube.com/watch?v=PmDtOBtZzhQ */
const btnRefreshQuote = document.getElementById('btn-refresh-quote')
const blockquoteTxt = document.getElementById('text')
const blockquoteAuthor = document.getElementById('author')

function generateQuote(){
    fetch("http://127.0.0.1:5500/assets/js/quotes.json").then((response) => {
        response.json().then((quotes) => {
            const totalQuotes = Object.keys(quotes.quotes).length
            const quoteIdx = Math.floor(Math.random() * totalQuotes)
            blockquoteTxt.innerText = `"${(quotes.quotes[quoteIdx].quote)}"`
            blockquoteAuthor.innerText = (quotes.quotes[quoteIdx].author)
        })
    })
}

btnRefreshQuote.addEventListener('click', generateQuote)
document.addEventListener('keyup', event => {
    if (event.code === 'Space') 
        generateQuote()
})