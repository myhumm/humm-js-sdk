# Humm JavaScript SDK
//TODO:
   1. complete others methods not yet docs
   2. test




#### Documentation


#### Installation

  $ npm install yumm --save

  or

  download the  yumm.js file from here {{link}}

#### Node.js Usage

  `humm.init()` valid params:

   1.  oauth_token
   2.  client_id
   3.  client_secret
   4.  redirect_uri
   5.  baseURL
   6.  baseURL
   7.  connectURL


  Browser:

  humm.init({
        client_id: '',
        redirect_uri:''
    });



  Server:

  humm.init({
        client_id: '',
        client_secret: '',
        redirect_uri: ''
    });

  You should not initialise with client secret in the browser environment

#### Authentication


### Authorization code example

    Step 1 - pop that allows users to login to Humm  (browser):
    ```javascript

          humm.authViaCodeGrant(function(error, response) {
                 console.log('------------- authViaAuthorizationCode complete -------------');
                 console.log(error);
                 console.log(response);

                 // example of response
                 { code :  'xxxxx' }

          });

    ```
    Step 2 - redirect uri should contain js that calls `humm.completeAuthorization(window.location);` (browser):

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
                This will close automatically
            </p>
        </body>
        </html>
   ```







### Implicit grant


###Client Credentials

```javascript

humm.isAuthorised();

humm.authViaImplicitGrant(cb);

humm.authViaCodeGrant(cb);

humm.completeAuthorization(location);

humm.accessViaCodeGrant(code, cb);

humm.authViaClientCredentials(cb);

humm.refreshAccessToken(token, cb);

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
- humm.external.addServices(service, sid, uname, token, secret, cb)
- humm.external.removeServices(service, sid, cb)

#### settings
- humm.settings.get()
- humm.settings.update()

#### others
- humm.search()
- humm.groupSearch()
- humm.radio()





## Building source

- `make build`

This will build and install node from source. Please be patient. :)

By default, the SDK is built into `build/sdk/sdk-VERSION.js`. Take a look at `webpack.config.js` for details.

### Building with the watcher

- `npm start`

This will run webpack with a watcher. The sdk will be rebuilt when you save changes in `src`.

In addition, webpack will start a development server on `http://localhost:8080/`. This serves the files in the `examples/` folder.



