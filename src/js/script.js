window.onload = function() {
    var videos = [
        "https://www.youtube.com/embed/Rc43Locn-YU", //updated 1
        "https://www.youtube.com/embed/FwkY6zKqxc8", //updated 2
        "https://www.youtube.com/embed/Pg8RK1SnRRI", //updated 3
        "https://www.youtube.com/embed/oQ8PI-YNGMM", //
        "https://www.youtube.com/embed/hbcGx4MGUMg" //
    ];

    var randomIndex = Math.floor(Math.random() * videos.length);
    var randomVideo = videos[randomIndex];

    var iframe = document.createElement('iframe');
    iframe.setAttribute('width', '160');
    iframe.setAttribute('height', '160');
    iframe.setAttribute('class', 'img-fluid border rounded-3 shadow-lg mb-4');
    iframe.setAttribute('src', randomVideo + '?autoplay=1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');

    document.getElementById('videoContainer').appendChild(iframe);
};

