'use strict';

var config  = require('../config'),
    request = require('../request'),
    baseURL = config.get('baseURL');


//todo remove
module.exports = {

    /**
     * Add external service such as Twitter or Facebook
     *
     * @param service
     * @param sid
     * @param uname
     * @param token
     * @param secret
     * @param cb
     */
    addServices: function addServices(service, sid, uname, token, secret, cb) {
        var requestData = {
            url: baseURL + '/services',
            type: 'POST',
            params: {
                service: service,
                sid: sid,
                uname: uname,
                token: token,
                secret: secret
            }
        };
        request.start(requestData, cb)
    },

    /**
     * Remove external service such as Twitter of Facebook
     *
     * @param service
     * @param sid
     * @param cb
     */
    removeServices: function removeServices(service, sid, cb) {
        var requestData = {
                url: baseURL + '/services',
                type: 'DELETE',
                params: {
                    service: service,
                    sid: sid
            }
        };
        request.start(requestData, cb)
    }
};
