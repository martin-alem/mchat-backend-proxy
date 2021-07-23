/**
 * @description keeps information about the different servers
 * @author Martin Alemajoh
 */

const profile = {};

profile.auth = {
    "host": "mchat-auth-35x46.ondigitalocean.app",
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
    "host": "mchat-signup-yfv5q.ondigitalocean.app",
    "port": 8080,
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

profile.reset = {
    "host": "mchat-reset-gxzxc.ondigitalocean.app",
    "port": 8080,
    "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    "reset": {
        "method": "POST",
        "path": "/reset"
    },
    "verify": {
        "method": "POST",
        "path": "/reset/verify",
    },
    "resend": {
        "method": "POST",
        "path": "/reset/verify/resend",
    },
    "change": {
        "method": "POST",
        "path": "/reset/change"
    }
}
module.exports = profile;