export const CookieService = {
    setCookie(nomeCookie, token, days = 7) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = nomeCookie + "=" + (token || "") + expires + "; path=/";
    },
    getCookie(nomeCookie) {
        var nameEQ = nomeCookie + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    cookieExists(nomeCookie) {
        return getCookie(nomeCookie) !== null;
    },
    updateCookie(nomeCookie, value, days) {
        setCookie(nomeCookie, value, days);
    }
}