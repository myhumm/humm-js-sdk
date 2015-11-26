# Humm JavaScript SDK

#### Documentation

#### Installation

  `npm install humm --save`

  or

  download the  humm.js file from here {{link}}

#### Usage

  `humm.init()` valid params:

   1.  client_id
   1.  client_secret


**Browser:**

```javascript

<script src="xxxxxxxxxxxxxxxxxx/sdk/sdk-1.0.0.js"></script>
<script>
   humm.init({
        client_id: '',
        redirect_uri:''
   });
</script>

```

**Node.js:**

```javascript

  var humm = require('humm');

  humm.init({
        client_id: '',
        client_secret: ''
  });

```

You should NOT initialise with client secret in the browser environment.

#### Authentication


### Authorization Code Flow


**Step 1 - redirect uri (browser):**

To use the authentication you have to host a callback.html file on your server
and set it as the redirect_uri in your app.

This callback.html file needs to contain just a few lines:


```html

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Callback</title>
        <script type="text/javascript" src="../humm-sdk-1.0.0.js"></script>
    </head>

    <body>
        <script type="text/javascript">
            humm.completeAuthorization(window.location);
        </script>
        <p>
            his will close automatically
        </p>
    </body>
</html>

```


**Step 2 - pop that allows users to login to Humm  (browser):**

```javascript

humm.authViaCodeGrant(function(error, response) {
    console.log('------------- authViaAuthorizationCode complete -------------');
    console.log(error);
    console.log(response); // { code :  'xxxxx' }
});

```

**Step 3 - get access token using the code (server):**

```javascript

humm.accessViaCodeGrant(function(error, response) {
    console.log('------------- accessViaCodeGrant complete -------------');
    console.log(error);
    console.log(response);

    /* response example:
         {
            "status_response": "ok",
            "data_response": {
            "access_token": "56559f693a5csdfa0bd5737a",
                "expires_in": 2592000,
                "token_type": "bearer",
                "refresh_token": "5c740898a3339c80dc48c53a598684e25c325898a3339c80dc48c53a598684e2",
                "scope": null
        }
   */


});

```

**Step 4 - set access token before requests  (server):**

```javascript

humm.setAccessToken(token);

```

You can refresh the access token using:

```javascript

humm.refreshAccessToken('xxxxxxxxxxxxxxxxxx',function(error, response) {
    console.log('------------- accessViaCodeGrant complete -------------');
    console.log(error);
    console.log(response);

    /* response example:
         {
            "status_response": "ok",
            "data_response": {
            "access_token": "56559f693a5csdfa0bd5737a",
                "expires_in": 2592000,
                "token_type": "bearer",
                "refresh_token": "5c740898a3339c80dc48c53a598684e25c325898a3339c80dc48c53a598684e2",
                "scope": null
        }
   */

});

```

### Client Credentials Grant Flow

The method makes it possible to authenticate your requests to the Humm API.
Note, however that this flow does not include authorization and therefore cannot be used to access or manage a user’s private data.

**Step 1 - You must initialise humm with `client_id` & `client_secret` (server):**

```javascript

  humm.init({
        client_id: '',
        client_secret: '',
        redirect_uri: ''
    });

```

**Step 2 - request access token (server):**

```javascript

humm.authViaClientCredentials(function(error, response) {
    console.log('----*--------- authViaClientCredentials complete -------------');
    console.log(error);
    console.log(response);

    /* response example:
         {
            "status_response": "ok",
            "data_response": {
            "access_token": "56559f693a5csdfa0bd5737a",
                "expires_in": 2592000,
                "token_type": "bearer",
                "refresh_token": "5c740898a3339c80dc48c53a598684e25c325898a3339c80dc48c53a598684e2",
                "scope": null
        }
   */

});

```

**Step 3 - set access token before requests  (server):**

```javascript

humm.setAccessToken(token);

```

###Implicit Grant Flow
The implicit grant type is used to obtain access tokens (it does not support the issuance of refresh tokens) and is optimized for public clients known to operate a particular redirection URI.

**Step 1 - redirect uri (browser):**

To use the authentication you have to host a callback.html file on your server
and set it as the redirect_uri in your app.

This callback.html file needs to contain just a few lines:


```html

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Callback</title>
        <script type="text/javascript" src="../humm-sdk-1.0.0.js"></script>
    </head>

    <body>
        <script type="text/javascript">
            humm.completeAuthorization(window.location);
        </script>
        <p>
            his will close automatically
        </p>
    </body>
</html>

```


**Step 2 - pop that allows users to login to Humm  (browser):**

```javascript

humm.authViaImplicitGrant(function(error, response) {
    console.log('------------- authViaAuthorizationCode complete -------------');
    console.log(error);
    console.log(response);

    /* response example:
       {
            "status_response": "ok",
            "data_response": {
                "access_token": "56559f693a5csdfa0bd5737a",
                "expires_in": 2592000,
                "token_type": "bearer",
                "refresh_token": "5c740898a3339c80dc48c53a598684e25c325898a3339c80dc48c53a598684e2",
                "scope": null
        }
       */

});
```

Once the user is logged in to humm, the window opened for authentication will automatically close and your ready to go.

if the user was successfully authenticated all future requests will be made using those credentials.



###authentication

```javascript
/**
 * check if token has been set
 *
 * @returns {boolean}
 */
humm.isAuthorised();

/**
 * connect with humm via implicit grant and return
 *
 * @param cb called with two params (error, response) upon auth complete
*/
humm.authViaImplicitGrant(cb);

/**
 * connect with humm via Authorization Code Flow
 *
 * @param cb called with two params (error, response) upon auth complete
 *
 * @returns {*}
 */
humm.authViaCodeGrant(cb);

/**
 * Called upon loading the redirect uri page
 *
 * @param location
 */
humm.completeAuthorization(location);

/**
 * Request an access token using the Authorization Code flow.
 *
 * @param code
 * @param cb
 */
humm.accessViaCodeGrant(code, cb);

/**
 * Auth via Client Credentials Flow
 *
 * @param cb
 */
humm.authViaClientCredentials(cb);

/**
 * Refresh the access token given that it hasn't expired.
 *
 * @param token
 * @param cb
 */
humm.refreshAccessToken(token, cb);

/**
 * Set Access token for future requests
 *
 * @param token
 */
humm.setAccessToken(token);
```

#### Artists
```javascript

humm.get(artistId, cb);

humm.artists.addFollowers(artistId, cb);

humm.artists.removeFollowers(artistId, cb);

humm.artists.getPlaylists(artistId, options, cb);

humm.artists.getRadio(artistId, cb);

humm.artists.getSimilar(artistId, cb);

humm.artists.getTopSongs(artistId, options, cb);

humm.artists.getFeatured(options, cb);

humm.artists.getPopular(options, cb);

humm.artists.getRecent(options, cb);

humm.artists.search(keyword, options, cb);

```
#### Playlists

```javascript

humm.playlists.create(title, description, isPrivate, cb );

humm.playlists.getFeatured(options, cb);

humm.playlists.addContributors(playlistId, ContributorId, cb)

humm.playlists.removeContributors(playlistId, ContributorId, cb);

humm.playlists.get(playlistId, options, cb)

humm.playlists.update()

humm.playlists.order()

humm.playlists.getSongs(playlistId, options, cb);

humm.playlists.addSongs(playlistId, songId, position, cb);

humm.playlists.removeSongs(playlistId, songId, cb);

humm.playlists.addSubscribers(playlistId, cb);

humm.playlists.removeSubscribers(playlistId, cb);

humm.playlists.getPopular(options, cb);

humm.playlists.getRecent(options, cb);

humm.playlists.search(keyword, options, cb);

humm.playlists.getStaffPicks(options, cb);

```
#### Songs

```javascript

humm.songs.getFeatured(options, cb);

humm.songs.getPopular(options, cb);

humm.songs.getRecent(options, cb);

humm.songs.search(keyword, options, cb);

humm.songs.appearsIn(songId, options, cb);

humm.songs.route();

humm.songs.get(songId, cb);

humm.songs.getSimilar(songId, options, cb)

humm.songs.getStaffPicked(options, cb);

```
#### Users

```javascript

humm.users.me(cb);

humm.users.discoverReleases(options, cb);

humm.users.discoverArtists(options, cb);

humm.users.discoverPlaylists(options, cb);

humm.users.addFavourites(songId, cb);

humm.users.addFollowing(userId, cb);

humm.users.removeFollowing(userId, cb);

humm.users.addPlays(songId, cb);

humm.users.search(keyword, options, cb);

humm.users.addSubscriptions(playlistId, cb);

humm.users.removeSubscriptions(playlistId, cb);

humm.users.get(userId, cb);

humm.users.getFavourites(userId, cb);

humm.users.getFollowing(userId, cb);

humm.users.getPlaylists(userId, cb);

humm.users.getPlays(userId, cb);

```
#### external

```javascript

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
    humm.external.addServices(service, sid, uname, token, secret, cb)

  /**
     * Remove external service such as Twitter of Facebook
     *
     * @param service
     * @param sid
     * @param cb
     */
    humm.external.removeServices(service, sid, cb)
```

#### others

   /**
     * Get a list of songs for a radio
     *
     * @param options { limit, genres (string / list of strings), moods (string / list of strings), discovery (bool), own (bool) }
     * @param cb
     */
     humm.radio()





## Building source

- `make build`

This will build and install node from source. Please be patient. :)

By default, the SDK is built into `build/sdk/sdk-VERSION.js`. Take a look at `webpack.config.js` for details.

### Building with the watcher

- `npm start`

This will run webpack with a watcher. The sdk will be rebuilt when you save changes in `src`.

In addition, webpack will start a development server on `http://localhost:8080/`. This serves the files in the `examples/` folder.



