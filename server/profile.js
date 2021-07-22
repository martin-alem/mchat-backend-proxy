/**
 * @description keeps information about the different servers
 * @author Martin Alemajoh
 */

const profile = {};

profile.auth = {
    "host": "localhost",
    "port": 8080,
    "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    "login": {
        "method": "POST",
        "path": "/authenticate/login",
    },
    "logout": {
        "method": "GET",
        "path": "/authenticate/logout"
    },
}

profile.signup = {
    "host": "localhost",
    "port": 8000,
    "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    "signup": {
        "method": "POST",
        "path": "/signup"
    },
    "verify": {
        "method": "POST",
        "path": "/signup/verify",
    },
    "resend": {
        "method": "POST",
        "path": "/signup/verify/resend",
    },
    "setup": {
        "method": "POST",
        "path": "/signup/setup"
    }
}
module.exports = profile;