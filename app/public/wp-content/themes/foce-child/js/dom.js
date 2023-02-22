// selection d'endroit ou la vidéo sera placée
let container = document.querySelector('.banner');


// création d'un élémnt vidéo
let video = document.createElement('video');


// attribute "poster"
video.poster = 'wp-content/themes/foce-child/assets/images/banner.png';

// ajoute de source vidéo
let source = document.createElement('source');
//ajout des attributs
source.setAttribute('src', 'https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d%27animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4');
source.setAttribute('type', 'video/mp4');

video.autoplay = true;
video.loop = true;

//  attacher élement 'source' à vidéo
video.appendChild(source);

// attacher vidéo à l'implacement dans la section
container.appendChild(video);
