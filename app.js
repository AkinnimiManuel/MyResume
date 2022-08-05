const  project1Btn = document.querySelector('.project__btn');
const landingPage = document.querySelector('.projects_detail');
const Backdrop = document.getElementById('backdrop');
const project2Btn = document.querySelector('.project2__btn');
const signupform = document.querySelector('.projects_detail2');
const project3Btn = document.querySelector('.project3__btn');
const Minicalculator = document.querySelector('.projects_detail3');


const toggleBackdrop = () =>{
  Backdrop.classList.toggle('visible');
};
const Showprojects = () =>{  
 landingPage.classList.toggle('visible');
 toggleBackdrop();
};
const Showprojects2 = () => {
  signupform.classList.toggle('visible');
  toggleBackdrop();
}
const Showprojects3 = () =>{
  Minicalculator.classList.toggle('visible');
  toggleBackdrop();
}
const closeProjects = () =>{
  landingPage.classList.remove('visible');
  signupform.classList.remove('visible');
  Minicalculator.classList.remove('visible');
  Backdrop.classList.remove('visible');
}
const backdropClickHandler = () =>{
  closeProjects();
};

project1Btn.addEventListener('click', Showprojects);
project2Btn.addEventListener('click', Showprojects2 )
project3Btn.addEventListener('click', Showprojects3)
Backdrop.addEventListener('click', backdropClickHandler);