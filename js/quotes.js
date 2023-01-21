const quotes = [
    {
        quote: "The computing scientist's main challenge is not to get confused by the complexities of his own making",
        author: "Edsger W. Dijkstra"
    },
    {
        quote: "The computer was born to solve problems that did not exist before.",
        author: "Bill Gates"
    },
    {
        quote: "We need to understand that if we all work on inclusion together, it’s going to be faster, broader, better, and more thorough than anything we can do on our own.",
        author: "Ellen Pao"
    },
    {
        quote: "A program is never less than 90% complete, and never more than 95% complete.",
        author: "Terry Baker"
    },
    {
        quote: "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.",
        author: "Albert Einstein"
    },
    {
        quote: "Design is where science and art break even.",
        author: "Robin Matthews"
    },
    {
        quote: "Everybody should learn to program a computer, because it teaches you how to think.",
        author: "Steve Jobs"
    },
    {
        quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        author: "Edsger W. Dijkstra"
    },
    {
        quote: "If carpenters made buildings the way programmers make programs, the first woodpecker to come along would destroy all of civilization.",
        author: "Unknown"
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

function giveRandNum() {
    return Math.floor(Math.random() * quotes.length)
}

const num = giveRandNum()
quote.innerText = quotes[num].quote
author.innerText = quotes[num].author
