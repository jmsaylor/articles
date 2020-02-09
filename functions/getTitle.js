const fetch = require("node-fetch");

async function getTitle(url) {
  let response = await fetch(url)
    .then(res => res.text())
    .then(body => body.match(/<title>(?<title>.*)<\/title>/i).groups.title);

  return response;
}

module.exports = getTitle;

///////////*  testing   see console  *////////////

function checkA() {
  setInterval(() => {
    console.log(A);
  }, 1000);
}

async function displayTitle() {
  let A = await getTitle(
    "https://dolphin-emu.org/blog/2020/02/07/dolphin-progress-report-dec-2019-and-jan-2020/"
  );
  console.log(A);
}

// checkA();
// displayTitle();
