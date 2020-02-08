const fetch = require('node-fetch');

function getTitle(url){
    let response = fetch(url)
        .then(res => res.text())
        .then(body => body.match(/<title>(?<title>.*)<\/title>/i).groups.title)

    return response
}

///////////*  testing   see console  *////////////

function checkA() {
    setInterval(() => {
        console.log(A)
    },1000)
}

let A = getTitle('https://dolphin-emu.org/blog/2020/02/07/dolphin-progress-report-dec-2019-and-jan-2020/')

checkA()

