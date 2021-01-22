function buscar(apiKey, channelId, maxResults) {
    const URL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
    return URL;
}


module.exports= buscar;