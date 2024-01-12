// Fishing Elements With Dom
let progress = document.querySelectorAll(".progress .progress-bar");
let skillsSection = document.querySelector(".skills");
let workSection = document.querySelector(".work");
let imgWork = document.querySelectorAll(".work .box-img");
let mediumSection = document.querySelector(".medium");
let mediumbox = document.querySelectorAll(".medium .box");
let myResumeSection = document.querySelector(".timeline");
let myResumeBoxesright = document.querySelectorAll(
  ".timeline .timeline-content .right"
);
let myResumeBoxesleft = document.querySelectorAll(
  ".timeline .timeline-content .left"
);
let servicesBoxes = document.querySelectorAll(
  ".services .container .row .col-sm-12"
);
let allSkills = document.querySelectorAll(
  ".skills .container .row .col-sm-12 span"
);
let data = [];
allSkills.forEach((e) => data.push(e.dataset.skill));
// Functions
function sar(ele, dataset) {
  let counter = setInterval(() => {
    ele.innerHTML++;
    for (i = 0; i < parseInt(dataset); i++) {
      if (ele.innerHTML === dataset) {
        clearInterval(counter);
      }
    }
  }, 150);
}
function transformOne(parent, elememts) {
  if (window.scrollY >= parent.offsetTop - 500) {
    elememts.forEach((e) => {
      e.style.cssText =
        "opacity: 1;transform: translate(0px,0px) rotate(0deg);";
    });
  }
}
function transformTwo(ele) {
  ele.forEach((e) => {
    if (window.scrollY >= e.offsetTop - 700) {
      e.style.cssText = "opacity: 1;transform: translate(0px,0px);";
    }
  });
}
// Events
window.onscroll = function () {
  transformOne(workSection, imgWork);
  transformOne(mediumSection, mediumbox);
  transformOne(myResumeSection, myResumeBoxesright);
  transformOne(myResumeSection, myResumeBoxesleft);
  transformTwo(servicesBoxes);
  if (window.scrollY >= skillsSection.offsetTop - 100) {
    for (i = 0; i < progress.length; i++) {
      progress[i].style.width = `${progress[i].dataset.width}% `;
    }
  }
};
for (i = 0; i < allSkills.length; i++) {
  sar(allSkills[i], data[i]);
}
