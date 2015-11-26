'use strict';

 //XMLHttpRequest  = require('xmlhttprequest').XMLHttpRequest,
var https           = require('https'),
    xhr2            = require('xhr2'),
    config          = require('./config'),
    oauth_token     = config.get('oauth_token'),
    client_id       = config.get('client_id'),
    client_secret   = config.get('client_secret');
/**
 *
 * @returns {T}
 * @private
 */
var _extend = function() {
  var args = Array.prototype.slice.call(arguments);
  var target = args[0];
  var objects = args.slice(1);
  target = target || {};
  objects.forEach(function(object) {
    for (var j in object) {
      if (object.hasOwnProperty(j)) {
        target[j] = object[j];
      }
    }
  });
  return target;
};

/**
 * construct final URL with params
 *
 * @param url
 * @param parameters
 * @returns {*}
 */
var buildUrl = function buildUrl(url, parameters) {
  var qs = '';
  for (var key in parameters) {
    if (parameters.hasOwnProperty(key)) {
      var value = parameters[key];
      qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
    }
  }
  if (qs.length > 0) {
    // chop off last '&'
    qs = qs.substring(0, qs.length - 1);
    url = url + '?' + qs;
  }
  return url;
};

/**
 * send the request
 *
 * @param requestData
 * @param cb
 * @returns {null}
 */
var send = function send(requestData, cb) {
    var req = new xhr2();
    req.open(requestData.type, buildUrl(requestData.url, requestData.params));

    // if oauth_token then attach to head
    if (oauth_token) {
        req.setRequestHeader('Authorization', 'Bearer ' + oauth_token);
    }

    // if this request is part of the auth process via code grant or Client Credentials Flow then attach client and secret to header
   if (requestData.clientCredentials) {
       console.log('------attaching header for Auth -------');
       req.setRequestHeader('Authorization', 'Basic ' + client_id + ':' + client_secret);
   }

    /**
     * Attach listener for request state
     */
    req.onreadystatechange = function onreadystatechange() {
        // request finished and response is ready
        if (req.readyState === 4) {
            var data = null;
            try {
                data = req.responseText ? JSON.parse(req.responseText) : '';
            } catch(e) {
                console.error(e);
            }
            //if success
            if (req.status >= 200 && req.status < 300) {
                complete(data, cb, null, true);
            } else {
                complete(null, cb, req, false);
            }
        }
    };

    //if get send else, attach post data and send
    if (requestData.type === 'GET') {
        req.send(null);
    } else {
        req.send(JSON.stringify(requestData.postData));
    }
};

/**
 * Called once request has been completed
 *
 * @param data
 * @param cb
 * @param req
 * @param success
 */
var complete = function complete(data, cb, req, success) {
  if (success) {
    cb(null, data);
  }else{
    cb(req, null);
  }
};


module.exports = {

  /**
   *  Start API request
   *
   * @param requestData
   * @param options
   * @param callback
   * @returns {null}
   */
  start: function start(requestData, options, callback) {
     // console.log(requestData);
     // console.log(client_id);

    //check params as we can pass in less than three params
    var opt = {},
        cb  = null;

    if (typeof options === 'object') {
      opt = options;
      cb = callback;
    } else if (typeof options === 'function') {
      cb = options;
    }

    //TODO: Remove as it temp until auth is in place: attach auth as param
     requestData.params.auth = client_id;

    // options extend postData, if any. Otherwise they extend parameters sent in the url
    var type = requestData.type || 'GET';

    if (type !== 'GET' && requestData.postData) {
      requestData.postData = _extend(requestData.postData, opt);
    } else {
      requestData.params = _extend(requestData.params, opt);
    }

    return send(requestData, cb);
  }
};