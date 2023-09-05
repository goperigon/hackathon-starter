const axios = require('axios')

export default async function  (req, res) {
    const twoDaysAgoTimestamp = Date.now() - 48 * 60 * 60 * 1000; // 48 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const usp = new URLSearchParams({
        'apiKey': process.env.API_KEY,
        'showReprints' : true,
        'orderBy' : 'date',
        'from': new Date(twoDaysAgoTimestamp).toISOString()
    })
    let perigonArticleResponse 
    try {
        perigonArticleResponse = await axios.get(`https://api.goperigon.com/v1/all?${usp.toString()}`)
    } 
    catch (err) {
        console.log(`issue retrieving API data: ${err}`)
    }
    res.status(perigonArticleResponse.status).json(perigonArticleResponse.data?.articles);

}

