$("document").ready(() => {
	//About page slideshow function
	$("#gallery > img:gt(0)").hide();

	setInterval(function () {
		$("#gallery > img:first")
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo("#gallery");
	}, 4000);

	//Articles page
	//Each article in the portfolio page is comprised of 5 unique elements.
	//This data is stored in a JSON array file, where each 5 elements are stored in an article object.
	//The code below iterates through these objects and uses the data to create nodes.
	//This was done to make the markup tidier and for the author to be able to add their own articles more easily.

	$.getJSON("articles.json", (articles) => {
		let html = "";
		for (const article in articles) {
			html += `<div class="article">
                    <img src="/images/${articles[article].thumbnail}" 
                         alt="${articles[article].description}">
                    <span class="articleHover">
                        ${articles[article].publisher}
                        <br>
                        ${articles[article].date}
                    </span>
                    <a href="${articles[article].url}"
                       target="_blank" 
                       class="viewArticle"> View Article
                    </a>
                    </div>`;
		}
		$("#articles").html(html);
	});
});
