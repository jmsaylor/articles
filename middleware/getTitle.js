const fetch = require("node-fetch");

async function getTitle(url) {
  try {
    let response = await fetch(url)
      .then(res => res.text())
      .then(body => body.match(/<title>(?<title>.*)<\/title>/i).groups.title);
    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getTitle;

///////////*  testing   see console  *////////////

function checkA() {
  setInterval(() => {
    console.log(A);
  }, 1000);
}

async function displayTitle() {
  let A = await getTitle();
  console.log(A);
}

// checkA();
// displayTitle();
