// general js for the project that wouldn't be a reuseable component


// cachebuster for tracking pixels
var randomNumber = Math.random() + "";
randomNumber = parseInt(randomNumber * 10000000000000);
$('.js-tracking-pixels-cachebusters').children().each(function() {
  var pixelSrc = $(this).attr('src');
  var newPixelSrc = pixelSrc.replace(/\[CACHEBUSTER\]/g, randomNumber);
  $(this).attr('src', newPixelSrc);
});