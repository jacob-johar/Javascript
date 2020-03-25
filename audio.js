
const audio = {
controls: true,
source: [
         {
         src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3',
         type: 'audio/mpeg'
         },
         {
         src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg',
         type: 'audio/ogg'
         }
         ]
};

window.onload=function(){
    var audioContainer=document.querySelector("#audioFile");
    var audioContents;
    if(audio.controls) audioContents="<audio controls>";
    else audioContents="<audio>";
    audio.source.forEach(audioData => {
                         audioContents+='<source src="'+audioData.src+'" type="'+audioData.type+'"></source>';
                         });
    audioContents+="</audio>";
    audioContainer.innerHTML+=audioContents;
}
