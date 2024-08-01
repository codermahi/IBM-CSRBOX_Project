document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'bc4d2728b730443a95291ad7fce5bef0';
    const newsContainer = document.getElementById('news-container');

    function fetchNews() {
        fetch(`https://newsapi.org/v2/everything?q=climate+change&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => displayNews(data.articles))
            .catch(error => console.error('Error fetching news:', error));
    }

    function displayNews(articles) {
        newsContainer.innerHTML = '';

        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('news-article');

            const articleImage = document.createElement('img');
            articleImage.src = article.urlToImage || 'placeholder-image-url';
            articleImage.alt = article.title;

            const articleTitle = document.createElement('h2');
            articleTitle.textContent = article.title;

            const articleDescription = document.createElement('p');
            articleDescription.textContent = article.description;

            const articleLink = document.createElement('a');
            articleLink.href = article.url;
            articleLink.textContent = 'Read more';
            articleLink.target = '_blank';

            articleElement.appendChild(articleImage);
            articleElement.appendChild(articleTitle);
            articleElement.appendChild(articleDescription);
            articleElement.appendChild(articleLink);

            newsContainer.appendChild(articleElement);
        });
    }

    fetchNews();
});
