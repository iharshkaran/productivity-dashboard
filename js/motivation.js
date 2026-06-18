function motivationalQuote(){

    let motivationalQuoteDiv = document.querySelector(".motivational-quote");
    let motivationalAuthorDiv = document.querySelector(".motivational-author");

    async function fetchQuote() {
        let motivationData = await fetch('https://motivational-spark-api.vercel.app/api/quotes/random');
        let data = await motivationData.json();
        motivationalQuoteDiv.innerHTML = `${data.quote}`
        motivationalAuthorDiv.innerHTML = `&#8213; ${data.author}`
    }

    fetchQuote()
}

export default motivationalQuote;