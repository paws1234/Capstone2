const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .react() // Adjust for your specific React setup
   .webpackConfig({
      devServer: {
         hot: true,
         port: 8080, // Adjust port as needed
      },
   })

module.exports = mix;

