const uswds = require('@uswds/compile');
const { src, dest, series } = require('gulp');

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './assets/css';
uswds.paths.dist.sass = './sass';

const manifest = ['./src/*.html', './assets/**/*.*'];
const copyHtml = () => src('./src/*.html').pipe(dest('docs/'));
const copyAssets = () => src('./assets/**/*.*').pipe(dest('docs/assets'));
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.default = series(copyHtml, copyAssets);
