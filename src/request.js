'use strict';

var config      = require('./config'),
    oauth_token = config.get('oauth_token'),
    clientId    = config.get('client_id');


var wrapPromiseWithAbort = function wrapPromiseWithAbort(promise, onAbort) {
  promise.abort = onAbort;
  return promise;
};

var promiseProvider = function promiseProvider(promiseFunction, onAbort) {
  var returnedPromise;
  if(window.Promise) {
    returnedPromise = new window.Promise(promiseFunction);

  }
  if (returnedPromise) {
    return new wrapPromiseWithAbort(returnedPromise, onAbort);
  } else {
    return null;
  }
};


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
 * Fire of request
 *
 * @param requestData
 * @param callback
 * @returns {null}
 */
var send = function send(requestData, callback) {
  var req = new XMLHttpRequest();

  var promiseFunction = function promiseFunction(resolve, reject) {

    function success(data) {
      if (resolve) {
        resolve(data);
      }
      if (callback) {
        callback(null, data);
      }
    }

    function failure() {
      if (reject) {
        reject(req);
      }
      if (callback) {
        callback(req, null);
      }
    }

    req.open(requestData.type, buildUrl(requestData.url, requestData.params));
    if (oauth_token) {
      req.setRequestHeader('Authorization', 'Bearer ' + oauth_token);
    }

    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        var data = null;
        try {
          data = req.responseText ? JSON.parse(req.responseText) : '';
        } catch (e) {
          console.error(e);
        }

        if (req.status >= 200 && req.status < 300) {
          success(data);
        } else {
          failure();
        }
      }
    };

    if (requestData.type === 'GET') {
      req.send(null);
    } else {
      req.send(JSON.stringify(requestData.postData));
    }
  };

  if (callback) {
    promiseFunction();
    return null;
  } else {
    return promiseProvider(promiseFunction, function() {
      req.abort();
    });
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
    requestData.params.auth = clientId;

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