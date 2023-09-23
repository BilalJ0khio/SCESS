const myVideoPlayer = document.getElementById("videoPlayer");
const myVideo = document.getElementById("myVideo");

// console.log(myVideoPlayer, myVideo);

function playVideo(file) {
  myVideo.src = file;
  myVideoPlayer.style.display = "block";
  myVideo.muted = false;
}

function stopVideo() {
  myVideoPlayer.style.display = "none";
  myVideo.muted = true;
}

//
// window.onscroll = changePos;
// var header = document.getElementsByClassName("navigation-section");

// function changePos() {
//   if (window.pageYOffset > 70) {
//     header.style.position = "absolute";
//     header.style.top = scrollY + "px";
//   } else {
//     header.style.position = "fixed";
//     header.style.top = "20px";
//   }
// }

/////////////

const contactDetail = document.querySelector(".contact-details-section");

const nav = document.querySelector(".navigation-section");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  },
  {
    // in the viewport
    //  root means the viwport
    root: null,
    // this nav will observe when the hero section will move out of the view port
    threshold: 0,
    // unit must be in pixels means -70 pixels pehrya nav open thi wende
    rootMargin: "0px",
  }
);

observer.observe(contactDetail);
