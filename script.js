document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const overlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const images = [
        'gallary/random.gif',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        // Add paths to your images here
    ];

    images.forEach(image => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        const img = document.createElement('img');
        img.src = image;
        item.appendChild(img);
        gallery.appendChild(item);

        img.addEventListener('click', function() {
            fullscreenImage.src = img.src;
            overlay.classList.remove('hidden');
        });
    });

    overlay.addEventListener('click', function() {
        overlay.classList.add('hidden');
    });
});
