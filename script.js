document.addEventListener('DOMContentLoaded', () => {
    const memeContainer = document.getElementById('memeContainer');

    async function fetchAndDisplayMeme() {
        try {
            const response = await fetch('https://meme-api.com/gimme');
            
            if (!response.ok) {
                throw new Error('Failed to fetch meme from the API');
            }

            const data = await response.json();
            const memeUrl = data.url;

            const memeImage = document.createElement('img');
            memeImage.src = memeUrl;
            memeImage.style.display = 'none';

            memeImage.onload = () => {
                const imageWidth = memeImage.naturalWidth;
                const imageHeight = memeImage.naturalHeight;

                memeContainer.style.width = `${imageWidth}px`;
                memeContainer.style.height = `${imageHeight}px`;

                memeImage.style.display = 'block';
                memeImage.style.width = '100%';
                memeImage.style.height = 'auto';

                memeContainer.innerHTML = '';
                memeContainer.appendChild(memeImage);

            };
        } catch (error) {
            console.error('Error fetching meme:', error);

            memeContainer.innerHTML = '<p>Failed to load meme. Please try again later.</p>';
        }
    }

    fetchAndDisplayMeme();
});
