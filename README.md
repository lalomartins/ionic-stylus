![](http://f.cl.ly/items/391y4708420P0H001k1G/meteoric.png)

# ionic-stylus

[Ionic's CSS Framework](http://ionicframework.com/docs/components/) in Stylus and bundled for Meteor. Currently up to date with version `v1.0.0-beta.13`.

## Installation

Using juliancwirko:s-jeet since the stylus package is currently out of date, see https://github.com/meteor/meteor/pull/3749
```
meteor add juliancwirko:s-jeet
meteor add meteoric:ionic-stylus
```

Then in your app's `.styl` file:

```
@import '.meteor/local/build/programs/server/assets/packages/koolaid1551_ionic-stylus/ionic';
```

**NOTE:**
Due to a current limitation of the Meteor packaging system, the above path may not exist the first time you run your Meteor app after installing this package. This will cause an error saying the file to import was not found. This may also occur if you run meteor reset. Restarting your app should fix this problem. See [meteor/meteor#2606](https://github.com/meteor/meteor/issues/2606) and [meteor/meteor#2796](https://github.com/meteor/meteor/issues/2796) for more info.

## Customization

Importing the source Stylus files as opposed to including compiled or CDN versions allows you to easily customize or theme your app using Stylus variables.

**_app-variables.styl**

```
// Change Ionic's `positive` color to Meteor's red color:
$positive = #DE4F4F;
```

**app.scss**

```
// Import your custom variables
@import 'app-variables';

// Then import ionic after. Ionic will use your variables instead of it's own.
@import '.meteor/local/build/programs/server/assets/packages/koolaid1551_ionic-stylus/ionic';
```

## Icons

You may also want to install our [Ionicons](https://github.com/koolaid1551/ionicons-stylus) package.

## Docs

See the official [Ionic CSS Docs](http://ionicframework.com/docs/components/) site for usage instructions.

## License
[MIT License](https://github.com/meteoric/ionic-sass/blob/master/LICENSE)
