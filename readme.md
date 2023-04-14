# Marvel Heros

This is a simple app to list all the characters from the marvel comics and see all their details. It have a fake login too.

## Before Starting

You will have to follow the nest steps in order to run the app

- Create an acount in [Marvel's developer portal](https://developer.marvel.com/).

- Create a .env file in the root of the project and copy the private key and public key from the Marvel's developer portal:

```bash
MARVEL_PUBLIC_KEY= public key
MARVEL_PRIVATE_KEY= private key
```

- Add the following info in the .env file (this info will be used for the login):

```bash
NAME= name
EMAIL = email
PASSWORD = password (more than 4 characters)
```

### Warnings!!

This project uses an old versión of React native (0.63) and expo(42). You will have to downgrade the Expo mobile app in order to test it.

- Android: you may download the required version from [here](https://apkpure.com/expo/host.exp.exponent) and install the APK.
- iOS: it’s not possible to downgrade the expo client app on a device, but you can install it on your simulator by running expo client:install:ios in your project directory.

I've developed this project with the iOS simulator and I haven't been able to test it on Android.

## Running the app

```bash
# install dependencies
npm install

# run in web mode
npm run web

# run in android
npm run android

# run in ios
npm run ios
```

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [Babel](https://babeljs.io/)