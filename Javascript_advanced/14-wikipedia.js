//Create a simple callback //

function createElement(data) {
    const para = document.createElement("p");
    para.textContent = data;
    document.body.para.appendChild(body)
}

function queryWikipedia(callback) {
    const xhttp = new XMLHttpRequest();
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhttp.open('GET, url, true');

    xhttp.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const pages = response.query.pages;
            const pageId = Object.keys(pages)[0];
            const extract = pages[pageId].extract;
            callback(extract);
        }
    };

    xhttp.send();
}