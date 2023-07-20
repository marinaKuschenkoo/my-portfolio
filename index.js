const template = document.querySelector("#template");
const list = document.querySelector(".about__tech");
const data = [
  {
    name: "Figma",
    link: "./images/tech/Figma.svg",
  },
  {
    name: "JavaScript",
    link: "./images/tech/js.svg",
  },
  {
    name: "HTML5",
    link: "./images/tech/html.svg",
  },
  {
    name: "CSS3",
    link: "./images/tech/css.svg",
  },
  {
    name: "REACT",
    link: "./images/tech/react.svg",
  },
  {
    name: "GIT",
    link: "./images/tech/git.svg",
  },
  {
    name: "NodeJS",
    link: "./images/tech/node.svg",
  },
  {
    name: "SASS",
    link: "./images/tech/sass.svg",
  },
];
const addItem = (link,name) => {
  const item = template.content.cloneNode(true);
  const cardImg = item.querySelector(".about__image-block");
  const textImg = item.querySelector(".about__text-block");
  cardImg.src = link;
  textImg.textContent = name;
  return item;
};
const renderCard = (link,name) => {
  list.append(addItem(link,name));
};
function displayCards() {
  data.forEach(function (item) {
    renderCard(item.link, item.name);
  });
}
displayCards();



const slider = document.querySelector('.slider');
let prevBtn = document.querySelector('.portfolio__prev');
let nextBtn = document.querySelector('.portfolio__next');

const sliders = Array.from(slider.querySelectorAll('.slider__item'));

let slideCount = sliders.length;
let slideIndex = 0;

prevBtn.addEventListener('click' ,()=>{
  slideIndex = (slideIndex-1 + slideCount)%slideCount;
  updateSlider();
})
nextBtn.addEventListener('click' ,()=>{
  slideIndex = (slideIndex + 1)%slideCount;
  updateSlider();
})
const updateSlider=() => {
  sliders.forEach((slide,index)=> {
    if (index===slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display='none'
    }
  })
}
updateSlider();
