'use strict';

var config  = require('./config'),
    req;

// if in node env require req during init
if (typeof window === 'undefined') {
    req = require('request');
}

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
    var access_token    = config.get('access_token'),
        client_id       = config.get('client_id'),
        client_secret   = config.get('client_secret'),
        url             = buildUrl(requestData.url, requestData.params);


    // if browser env use XMLHttpRequest()
    if(typeof window !== 'undefined') {
        req = new XMLHttpRequest();
        req.open(requestData.type, url);

        // if oauth_token then attach to head //todo
        if (access_token) {
            req.setRequestHeader('Authorization', 'Bearer ' + access_token);
        }

        req.onreadystatechange = function onreadystatechange() {
            //  console.log('------ req Finished -------');
            //  console.log(req);

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
                    complete(data, cb, true);
                } else {
                    complete(data, cb, false);
                }
            }
        };

        //if get send else, attach post data and send
        if (requestData.type === 'GET') {
            req.send(null);
        } else {
            req.send(JSON.stringify(requestData.postData));
        }
    } else {
        //if node env use request
        var baseOptions = {
            url: url,
            json: true
        };

        //if token attach
        if (access_token) {
            baseOptions.headers =  {
                Authorization: 'Bearer ' + (new Buffer(access_token).toString('base64'))
            };
        }

        // on server side request complete
        var onRequestComplete = function(error, response, body){
          //  console.log('error: ' + error);
          //  console.log('response.statusCode: ' + response.statusCode);
          //  console.log('body: ' + body);
          //  console.log(response.body);

            if(response.statusCode  >= 200 && response.statusCode < 300){
                complete(body, cb, true);
            }else {
                complete(body, cb, false);
            }
        };
        // todo: rewrite
        switch(requestData.type) {
            case 'GET':
                    req.get(baseOptions, onRequestComplete);
                break;
            case 'POST':
                    if (requestData.postData) {
                        baseOptions.form = requestData.postData;
                    }
                    req.post(baseOptions, onRequestComplete);
                break;
            case 'PUT':
                    req.put(baseOptions, onRequestComplete);
                break;
            case 'DELETE':
                    req.delete(baseOptions, onRequestComplete);
                break;
        }
    }

};

/**
 * Called once request has been completed
 *
 * @param data
 * @param cb
 * @param success
 */
var complete = function complete(data, cb, success) {
  //  console.log('--------------- Request complete -------------');
  //  console.log(data);
  if (success) {
    cb(null, data);
  }else{
    cb(data, null);
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
    var opt     = {},
        cb      = null,
        type    = requestData.type || 'GET';

    if (typeof options === 'object') {
      opt = options;
      cb = callback;
    } else if (typeof options === 'function') {
      cb = options;
    }
    //TODO: Remove as it temp until auth is in place: attach auth as param
     requestData.params.auth = config.get('client_id');

    if (type !== 'GET' && requestData.postData) {
      requestData.postData = _extend(requestData.postData, opt);
    } else {
      requestData.params = _extend(requestData.params, opt);
    }
      send(requestData, cb);
  }
};