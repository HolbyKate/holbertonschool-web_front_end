//Create a simple callback //

function createElement(data) {
    const para = document.createElement("p");
    para.textContent = data;
    document.body.para.appendChild(body)
}

function queryWikipedia(callback) {
  const xml = new XMLHttpRequest();
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  xml.open("GET", url, true);
  xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
      const response = JSON.parse(xml.responseText);
      const extract =
        response.query.pages[Object.keys(response.query.pages)[0]].extract;
      callback(extract);
    }
  };
  xml.send();
}

queryWikipedia(function (extract) {
  createElement(extract);
});