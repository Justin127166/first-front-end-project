let body = document.querySelector('body')

btnQuote()

function btnQuote(){
    var btn =document.createElement('button')
    let btnctn = document.createElement('div')
    btn.id = 'btn'
    btnctn.createClassName = '1stbtnclassname'
    btnctn.append(btn)
    btn.innerText = 'RANDOM ANIME QUOTE'
    document.body.append(btn)
    btn.addEventListener('click', function(){
        hideQuoteBox()
        quoteUrl()

    })
    
}

function quoteUrl(){
    $.get('https://animechan.vercel.app/api/random', getquote)
}


function getquote(data){
    // const quoteBox = document.createElement('div')
    // quoteBox.id = 'quotebox'
    var anime = data.anime
    anime.ClassName = 'wee'
    const quoteBox = document.getElementById('quoteBox')
    quoteBox.innerText = `Anime: ${data.anime} 
    
    Character: ${data.character} 

    Quote: ${data.quote}`
    // body.append(quoteBox)
}

function hideQuoteBox(){
    const quoteCtn = document.getElementById('quotebox')
    $(quoteCtn).empty()
}