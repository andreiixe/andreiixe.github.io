window.onload = function() {
    var videos = [
        "https://www.youtube.com/embed/HHa-blI30D0",
        "https://www.youtube.com/embed/9SR_QJvQ74E",
        "https://www.youtube.com/embed/hOChJNi6MgI",
        "https://www.youtube.com/embed/B2Vmd2yRH34",
        "https://www.youtube.com/embed/VcLywBMHZxQ",
        "https://www.youtube.com/embed/zuwFO70RzU8",
        "https://www.youtube.com/embed/A30dc1fNt20",
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

    function detectiOSVersion() {
        var ua = navigator.userAgent;
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            var version = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            return version;
        }
        return null;
    }

    function redirectBasedOniOSVersion() {
        var version = detectiOSVersion();
        if (version && (version[0] === 5 || version[0] === 6 || version[0] === 7 || version[0] === 8 || version[0] === 9)) {
            // Redirect to another page
            window.location.href = "../../IOS/Web/index.html";
        }
    }

    // Call the redirect function when the page loads
    redirectBasedOniOSVersion();
};

