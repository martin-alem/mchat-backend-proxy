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

module.exports = profile;