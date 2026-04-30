function start(){
  document.body.requestFullscreen();

  let t = document.getElementById("text");
  let i = 0;

  let load = setInterval(()=>{
    i++;
    t.innerText = "scanning " + (i*10) + "%";

    if(i>=10){
      clearInterval(load);
      jumpscare();
    }
  },250);
}

function jumpscare(){
  document.body.classList.add("glitch");
  document.body.innerHTML = "";

  let vid = document.createElement("video");
  vid.src = "https://www.w3schools.com/html/mov_bbb.mp4";
  vid.autoplay = true;
  vid.loop = false;
  vid.muted = false;

  document.body.appendChild(vid);

  let audio = new Audio("https://www.myinstants.com/media/sounds/scream.mp3");
  audio.play();
}
