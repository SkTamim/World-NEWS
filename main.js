// targeting the news container
let newsContainer = document.getElementById("newsContainer");

// for api   
const data = null;

// Create an AJAX get Request
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

// Source , apiKey and keyword
// let source = "in";
// let apiKey = "59d592e1de3d41fc84d22339eee827d3";
// let keyword = "BTS";

// Send the GET request
xhr.open(
  "GET",
  `https://free-news.p.rapidapi.com/v1/search?q=bts&lang=en`,
  true
);
xhr.setRequestHeader("x-rapidapi-host", "free-news.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "e4c04caea2msh200bf9b846168a4p1809b2jsnb8543938d384");

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
                <img class="img-fluid border border-success" src="${element.media}" alt="Image">
            </div>
            <div class="col mt-2 pt-1">
                <h5 class="m-0">${element.title}</h5>
            </div>
            <div class="col mb-2 pb-1">
                <a href="https://${element.clean_url}" target="_blank" class="m-0 text-muted" style="font-size:13px;">${element.clean_url}</a>
                <span class="m-0 text-muted" style="font-size:13px;"> &#8226; ${element.published_date.slice(0,10).split('-').reverse().join("-")}</span>
            </div>
            <div class="col">
                <a href="${element.link}" target="_blank" class="btn btn-success w-100">Show more</a>
            </div>
      </div>`;
        news += newsHtml;
    });
    newsContainer.innerHTML = news;

  } else {
    console.log("An error occurred");
  }
};
xhr.send(data);