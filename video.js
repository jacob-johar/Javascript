

const video = {
controls: true,
width: 320,
height: 240,
source: [
         {
         src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4',
         type: 'video/mp4'
         },
         {
         src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg',
         type: 'video/ogg'
         }
         ]
};
window.onload = function (){
    var videoContainer = document.querySelector("#videoFile");
    var videoContents='<video width="'+video.width+'" height="'+video.height+'" ';
    if(video.controls == true) videoContents+= "controls>";
    else videoContents+= ">";
    video.source.forEach(source => {
                         videoContents+= '<source src="'+source.src+'" type="'+source.type+'">';
                         });
    videoContents+= "</video>";
    videoContainer.innerHTML+=videoContents;
}
