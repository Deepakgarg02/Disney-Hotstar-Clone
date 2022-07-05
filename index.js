let movies = [
  {
    name: "loki",
    des:
      "The Mercurial Villain Loki resumes his role as the god of Mischief in a new series that takes place after the events of Avengers: Endgame.",
    image: "images/slider 1.png"
  },
  {
    name: "falcon and the winter soldier",
    des:
      "Anthony Mackie has spoken out against the rumours surrounding his on screen relationship with Sebastian Stan in The Falcon And The Winter Soldier. In an interview with Variety, the Marvel actor confirmed that despite fan theories, the relationship was purely platonic.",
    image: "images/slider 2.png"
  },
  {
    name: "wanda vision",
    des:
      "Wanda embarks on a troubling journey that forced her to revisit her daunting past for insight into her present and future.",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      " Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
    image: "images/slider 4.png"
  },
  {
    name: "luca",
    des:
      "“Luca” tells the story of two male sea monsters who have a friendship so intimate that many critics interpreted it as a gay allegory.",
    image: "images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");

let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classmates
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];
videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth - 200;
  });
});
