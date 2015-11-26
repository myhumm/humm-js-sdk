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

  /**
    * Find an artist
    *
    * @param artistId
    * @param options { limit, offset }
    * @param cb
    */
   humm.get(artistId, options, cb);


  /**
    * Add current user to artist's list of followers
    *
    * @param artistId
    * @param cb
    */
   humm.artists.addFollowers(artistId, cb);


  /**
    * Remove current user from artist's list of followers
    *
    * @param artistId
    * @param cb
    */
   humm.artists.removeFollowers(artistId, cb);


  /**
    * Get playlists / albums associated with an artist
    *
    * @param artistId
    * @param options { limit, offset }
    * @param cb
    */
   humm.artists.getPlaylists(artistId, options, cb);


  /**
    * Get a curated list of artists songs
    *
    * @param artistId
    * @param options { limit, offset }
    * @param cb
    */
   humm.artists.getRadio(artistId, options, cb);


   /**
    * Get a list of musically similar artists
    *
    * @param artistId
    * @param options { limit, offset }
    * @param cb
    */
   humm.artists.getSimilar(artistId, options, cb);


  /**
    * Get a list of an artist's top songs
    *
    * @param artistId
    * @param options { limit, offset, songtype }
    * @param cb
    */
  humm.artists.getTopSongs(artistId, options, cb);


   /**
    * Get a list of artists featured by Humm
    *
    * @param options { limit, offset, genre }
    * @param cb
    */
  humm.artists.getFeatured(options, cb);


   /**
    * Get a list of artists popular on Humm
    *
    * @param options { limit, offset }
    * @param cb
    */
  humm.artists.getPopular(options, cb);


   /**
    * Get a list of artists recently added on Humm
    *
    * @param options { limit, offset }
    * @param cb
    */
  humm.artists.getRecent(options, cb);


   /**
    * Search for an artist using keyword
    *
    * @param keyword
    * @param options { limit, offset }
    * @param cb
    */
  humm.artists.search(keyword, options, cb);

```
#### Playlists

```javascript

    /**
     * Add a playlist for the current user
     *
     * @param title
     * @param description
     * @param options { private }
     * @param cb
     */
    humm.playlists.create(title, description, options, cb );

    /**
     * Get a list of playlists featured by Humm
     *
     * @param options { limit, offset }
     * @param cb
     */
    humm.playlists.getFeatured(options, cb);

    /**
     * Add a user to a playlist's list of contributorss
     *
     * @param playlistId
     * @param contributorId
     * @param cb
     */
    humm.playlists.addContributors(playlistId, ContributorId, cb)

   /**
    * Remove a user from a playlist's list of contributors
    *
    * @param playlistId
    * @param contributorId
    * @param cb
    */
    humm.playlists.removeContributors(playlistId, ContributorId, cb);

    /**
     * Get a playlist by id
     *
     * @param playlistId
     * @param cb
     */
    humm.playlists.get(playlistId, cb)

    /**
     * Edit a playlist
     *
     * @param playlistId
     * @param title
     * @param description
     * @param isPrivate
     * @param cb
     */
    humm.playlists.update(playlistId, title, description, isPrivate, cb);

    /**
     * Order the songs in a playlist
     *
     * @param playlistId
     * @param body
     * @param cb
     */
    humm.playlists.order(playlistId, body, cb)

    /**
     * Get a list of playlist songs
     *
     * @param playlistId
     * @param options { limit, offset }
     * @param cb
     */
    humm.playlists.getSongs(playlistId, options, cb);

   /**
    * Add a song to a playlist given their ids
    *
    * @param playlistId
    * @param songId
    * @param position
    * @param cb
    */
    humm.playlists.addSongs(playlistId, songId, position, cb);

    /**
     * Remove a song from a playlist
     *
     * @param playlistId
     * @param songId
     * @param cb
     */
    humm.playlists.removeSongs(playlistId, songId, cb);


    /**
     * Add playlist to the list current user has subscriptions to
     *
     * @param playlistId
     * @param cb
     */
    humm.playlists.addSubscribers(playlistId, cb);

   /**
    * Remove playlist to the list current user has subscriptions to
    *
    * @param playlistId
    * @param cb
    */
    humm.playlists.removeSubscribers(playlistId, cb);

    /**
     * Get a list of playlists popular on Humm
     *
     * @param options { limit, offset, section, uid }
     * @param cb
     */
    humm.playlists.getPopular(options, cb);


   /**
    * Get a list of playlists recently added on Humm
    *
    * @param options { limit, offset }
    * @param cb
    */
   humm.playlists.getRecent(options, cb);

    /**
     * search for albums or playlists
     *
     * @param keyword
     * @param options { limit, offset, offset, album (bool) }
     * @param cb
     */
    humm.playlists.search(keyword, options, cb);

   /**
    * Get a list of playlists picked by staff at Humm
    *
    * @param options { limit, offset }
    * @param cb
    */
   humm.playlists.getStaffPicks(options, cb);

```
#### Songs

```javascript

    /**
     * Get a list of songs featured by Humm
     *
     * @param options { limit, offset, genre }
     * @param cb
     */
    humm.songs.getFeatured(options, cb);

   /**
    * Get a list of songs popular on Humm"
    *
    * @param options { limit, offset, genre }
    * @param cb
    */
   humm.songs.getPopular(options, cb);

  /**
   * Get a list of songs recently added on Humm
   *
   * @param options { limit, offset, genre }
   * @param cb
   */
  humm.songs.getRecent(options, cb);

  /**
   * Search for a song
   *
   * @param keyword
   * @param options { limit, offset, songtype }
   * @param cb
   */
  humm.songs.search(keyword, options, cb);


   /**
     * Get a list of playlists a song appears in
     *
     * @param songId
     * @param options { limit }
     * @param cb
     */
  humm.songs.appearsIn(songId, options, cb);


    /**
     * Get a song by id
     *
     * @param songId
     * @param cb
     */
  humm.songs.get(songId, cb);


  /**
   * Get a list of similar songs
   *
   * @param songId
   * @param options { limit, offset }
   * @param cb
   */
  humm.songs.getSimilar(songId, options, cb)


   /**
    * Get a list of songs picked by staff at Humm
    *
    * @param options { limit, offset, genre }
    * @param cb
    */
  humm.songs.getStaffPicked(options, cb);

```
#### Users

```javascript

     /**
      * Get the current user
      *
      * @param cb
      */
     humm.users.me(cb);


    /**
     * Get a list of recommended albums
     *
     * @param options { limit, offset }
     * @param cb
     */
    humm.users.discoverReleases(options, cb);


   /**
    * Get a list of recommended artists
    *
    * @param options { limit, offset }
    * @param cb
    */
   humm.users.discoverArtists(options, cb);


  /**
   * Get a list of recommended playlists / albums
   *
   * @param options { limit, offset }
   * @param cb
   */
  humm.users.discoverPlaylists(options, cb);


   /**
    * Add song to current user favourites
    *
    * @param songId
    * @param cb
    */
  humm.users.addFavourites(songId, cb);


   /**
    * Add user to the list current user is following
    *
    * @param userId
    * @param cb
    */
  humm.users.addFollowing(userId, cb);


  /**
   * Remove user from the list current user is following
   *
   * @param userId
   * @param cb
   */
 humm.users.removeFollowing(userId, cb);


  /**
   * Add song to the list of the current user's plays
   *
   * @param songId
   * @param cb
   */
 humm.users.addPlays(songId, cb);


   /**
    * Search for a user
    *
    * @param keyword
    * @param options { limit, offset }
    * @param cb
    */
 humm.users.search(keyword, options, cb);

  /**
   * Add user to the list current user has subscriptions to
   *
   * @param playlistId
   * @param cb
   */
 humm.users.addSubscriptions(playlistId, cb);

 /**
  * Remove user from the list current user has subscriptions to
  *
  * @param playlistId
  * @param cb
  */
 humm.users.removeSubscriptions(playlistId, cb);



 /**
  * Get a user; returns a user object for a given id
  *
  * @param userId
  * @param cb
  */
 humm.users.get(userId, cb);

 /**
  * Get a user's favourite songs; returns a list of song objects
  *
  * @param userId
  * @param options { limit, offset }
  * @param cb
  */
 humm.users.getFavourites(userId, options, cb)

 /**
   * Get a list of the users a user is following; returns a list of user objects for a given id
   *
   * @param userId
   * @param options
   * @param cb
   */
 humm.users.getFollowing(userId, options, cb);

 /**
   * Get a list of user owned playlists
   *
   * @param userId
   * @param options
   * @param cb
   */
 humm.users.getPlaylists(userId, options, cb);


 /**
   * Get a list of a user's plays
   *
   * @param userId
   * @param options
   * @param cb
   */
 humm.users.getPlays(userId, options, cb);

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



