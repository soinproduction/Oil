import '../vendor/lightbox';
import '../vendor/lg-video'

import vars from "../_vars";

const {productSliderGallery,youTubeVideos,localVideos} = vars;

lightGallery(productSliderGallery,{
  download:false
});

youTubeVideos.forEach(function(youTubeVideo){
  lightGallery(youTubeVideo, {
    controls: 0,
    showinfo: 0,
    rel: 0,
    videoMaxWidth: '1240px',
  });
});

localVideos.forEach(function(localVideo){
  lightGallery(localVideo, {
    controls: 0,
    showinfo: 0,
    rel: 0,
    videoMaxWidth: '1240px',
  });
})
