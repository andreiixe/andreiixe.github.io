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
        window.location.href = "../../../IOS/Web/index.html";
    }
}

// Call the redirect function when the page loads
window.onload = function() {
    redirectBasedOniOSVersion();
};