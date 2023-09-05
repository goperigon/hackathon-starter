const axios = require('axios')

async function getPerigonArticles() {
    const usp = new URLSearchParams({
        'apiKey': process.env.API_KEY,
        'showReprints' : true
    })
    let perigonArticleResponse 
    try {
        perigonArticleResponse = await axios.get(`https://api.goperigon.com/v1/all?${usp.toString()}`)
    } 
    catch (err) {
        console.log(`issue retrieving API data: ${err}`)
    }
    return perigonArticleResponse.data?.articles
}

module.exports = getPerigonArticles;
