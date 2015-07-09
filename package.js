Package.describe({
  name: 'koolaid1551:ionic-stylus',
  summary: "Ionic's CSS Framework in stylus format and bundled for Meteor.",
  version: '0.1.9',
  git: 'https://github.com/koolaid1551/ionic-stylus'
});

Package.onUse(function(api) {
  //disabled versionsFrom for now - causing trouble on windows
  //api.versionsFrom('1.0');

  //api.use("stylus", ["server"]);
  //api.imply("stylus", ["server"]);
  //using s-jeet since the stylus package is currently out of date
  //https://github.com/meteor/meteor/pull/3749
  api.use("mquandalle:stylus", ["server"]);
  api.imply("mquandalle:stylus", ["server"]);

  api.addFiles([
    'stylus/_action-sheet.styl',
    'stylus/_animations.styl',
    'stylus/_backdrop.styl',
    'stylus/_badge.styl',
    'stylus/_bar.styl',
    'stylus/_button-bar.styl',
    'stylus/_button.styl',
    'stylus/_checkbox.styl',
    'stylus/_form.styl',
    'stylus/_grid.styl',
    'stylus/_items.styl',
    'stylus/_list.styl',
    'stylus/_loading.styl',
    'stylus/_menu.styl',
    'stylus/_mixins.styl',
    'stylus/_modal.styl',
    'stylus/_platform.styl',
    'stylus/_popover.styl',
    'stylus/_popup.styl',
    'stylus/_progress.styl',
    'stylus/_radio.styl',
    'stylus/_range.styl',
    'stylus/_reset.styl',
    'stylus/_scaffolding.styl',
    'stylus/_select.styl',
    'stylus/_slide-box.styl',
    'stylus/_tabs.styl',
    'stylus/_toggle.styl',
    'stylus/_transitions.styl',
    'stylus/_type.styl',
    'stylus/_util.styl',
    'stylus/_variables.styl'
  ], 'server');

  api.addFiles('_ionic.styl', 'server');
});
