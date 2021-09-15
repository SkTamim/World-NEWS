// targeting the news container
let newsContainer = document.getElementById("newsContainer");

// Create an AJAX get Request
const xhr = new XMLHttpRequest();

// Source , apiKey and keyword
let source = "in";
let apiKey = "59d592e1de3d41fc84d22339eee827d3";
let keyword = "BTS";

// Send the GET request
xhr.open(
  "GET",
  `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`,
  true
);
xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let news ='';
    articles.forEach(function (element, index) {
        console.log(element);
      // News html
      let newsHtml = `
      <div class="col-lg-3 g-3 my-3">
            <div class="col">
                <img class="img-fluid border border-success" src="${element.urlToImage}" alt="Image">
            </div>
            <div class="col my-2 py-2">
                <h5 class="m-0">${element.title}</h5>
            </div>
            <div class="col">
                <a href="${element.url}" target="_blank" class="btn btn-success w-100">Show more</a>
            </div>
      </div>`;
        news += newsHtml;
    });
    newsContainer.innerHTML = news;

  } else {
    console.log("An error occurred");
  }
};
xhr.send();