document.getElementById('scrapeButton').addEventListener('click', () => {
    fetch('https://web-scraper-jsq.vercel.app/scrape-news')
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('allNewsButton').addEventListener('click', loadAllNews);

function loadNews() {
    fetch('https://web-scraper-jsq.vercel.app/articles.json')
        .then(response => response.json())
        .then(articles => {
            const newsContainer = document.getElementById('newsContainer');
            newsContainer.innerHTML = '';

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.className = 'article';

                articleDiv.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.detailLink}" target="_blank">Read more</a>
                    <p><strong>Genre:</strong> ${article.genre}</p>
                    <p><strong>Date:</strong> ${article.time}</p>
                    
                `;

                newsContainer.appendChild(articleDiv);
            });
        });
}



function loadAllNews() {
    let choice = document.querySelector('.category').value

    fetch('https://web-scraper-jsq.vercel.app/all-articles.json')
        .then(response => response.json())
        .then(articles => {
            const newsContainer = document.getElementById('newsContainer');
            newsContainer.innerHTML = '';

            articles.forEach(article => {
                if(article.genre === choice){
                    const articleDiv = document.    createElement('div');
                articleDiv.className = 'article';

                articleDiv.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.detailLink}" target="_blank">Read more</a>
                    <p><strong>Genre:</strong> ${article.genre}</p>
                    <p><strong>Date:</strong> ${article.time}</p>
                `;

                newsContainer.appendChild(articleDiv);
                }
                console.log(choice)
            });
        });
}
