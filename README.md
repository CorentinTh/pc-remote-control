[![License](https://img.shields.io/github/license/CorentinTh/pc-remote-control.svg)](https://github.com/CorentinTh/pc-remote-control/blob/master/LICENSE)

# pc-remote-control

Small app allowing you to shutdown, put in sleep mode or lock your computer remotely using your phone.

## How to use it?
### Installation

To install this app, just `git clone` and `npm install` this repository:

``` bash
git clone https://github.com/CorentinTh/pc-remote-control.git
cd pc-remote-control
npm install
```

### Usage

To launch the app run:

``` bash
npm start
```

Then, on your phone or tablet browse for `http://your-local-ip:3000`. You should have the following page:

![remote-control](http://cdn.corentin-thomasset.fr/img-divers/remote-control/1.png)

Just press a button and you will be asked for a password. By default the password is `azerty`, you can change it by modifying the first line of the `index.js` ([here]()).

``` javascript
// index.js

// ...

// Change the password here:
const password = 'azerty';

// ...
```

![remote-control-password](http://cdn.corentin-thomasset.fr/img-divers/remote-control/2.png)

You may have the following user feedback:

![remote-control-user-feedback](http://cdn.corentin-thomasset.fr/img-divers/remote-control/5.png)


## Compatibility

Since I created this application for my windows laptop, I did not test every platform. Feel free to contribute! Just complete the command lines [here]().

|              |       **Windows**      |            **Linux**           |             **OSx**            |
|:------------:|:----------------------:|:------------------------------:|:------------------------------:|
| **Shutdown** | Implemented and tested | Implemented but **not** tested | Implemented but **not** tested |
|   **Sleep**  | Implemented and tested | Implemented but **not** tested | Implemented but **not** tested |
|   **Lock**   | Implemented and tested |        *Not implemented*       |        *Not implemented*       |
|  **Logout**  | Implemented and tested |        *Not implemented*       |        *Not implemented*       |
