let mix = require('laravel-mix');

mix.js('src/js/main.js', 'assets/js/')
.sass('src/css/master.scss', 'assets/css/').options({
  processCssUrls:false
});
