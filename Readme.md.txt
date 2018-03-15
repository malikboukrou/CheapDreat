1. Importer le projet.

2. Ajouter les modules supplémentaires.

- ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
- npm install --save @ionic-native/geolocation
- ionic cordova plugin add cordova-plugin-nativegeocoder
- npm install --save @ionic-native/native-geocoder
- ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyC9G7nfUCwvsSs_FQL8p0gZqFgtjsgpvvc" --variable API_KEY_FOR_IOS="AIzaSyCV8EJmmZLULkuW8d2_Sxas73ZpJyQ5pxE"
- npm install --save @ionic-native/google-maps

3. Executer 'ionic serve --lab' à la racine du projet