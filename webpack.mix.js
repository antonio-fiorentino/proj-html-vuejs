let mix = require('laravel-mix');

mix
  .sass('src/app.scss', 'dist/')
  .sass('src/colors.scss', 'dist/')
  .sass('src/bg-img.scss', 'dist/')
  .options({ processCssUrls: false });
