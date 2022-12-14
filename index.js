const navTriggerEl = document.querySelector('.burger');
const navEl = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__items');
const navUntriggerEl = document.querySelector('.X-Icon');
const popUpWindow = document.querySelector('.popUpWindow');
const projects = document.querySelector('.projects');
const PopUntriggerEl = document.getElementsByClassName('Xpop');
const seeProject = document.getElementsByClassName('seeProject');
const submitButtonEl = document.querySelector('#btm-btn');
const errorMessage = document.querySelector('.errorMSG');
const form = document.querySelector('form');
const nameEl = document.querySelector('.name');
const eMailEl = document.querySelector('.email');
const textEl = document.querySelector('.text');
const projectdetails = [
  {
    name: 'Multi-post story', description: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum i ssimply dummy text of theprinting and typesetting industry.', featuredImage: 'images/ImgPlaceholder.svg', technologies: ['html', 'css', 'bootstrap', 'ruby'], linkLiveVersion: '', linkVersion: '',
  },
  {
    name: 'Stories Story story', description: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum i ssimply dummy text of theprinting and typesetting industry.', featuredImage: 'images/ImgPlaceholder.svg', technologies: ['html', 'css', 'bootstrap', 'ruby'], linkLiveVersion: '', linkVersion: '',
  },
  {
    name: 'Story Stories story', description: 'Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum i ssimply dummy text of theprinting and typesetting industry.', featuredImage: 'images/ImgPlaceholder.svg', technologies: ['html', 'css', 'bootstrap', 'ruby'], linkLiveVersion: '', linkVersion: '',
  },
  {
    name: 'Story Story stories', description: 'Adnan Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum i ssimply dummy text of theprinting and typesetting industry.', featuredImage: 'images/ImgPlaceholder.svg', technologies: ['html', 'css', 'bootstrap', 'ruby'], linkLiveVersion: '', linkVersion: '',
  },
];

function hideNav() {
  navTriggerEl.classList.remove('close');
  navEl.classList.remove('open');
  navEl.classList.remove('position');
  navUntriggerEl.classList.remove('open');
}

function showNav() {
  navTriggerEl.classList.add('close');
  navEl.classList.add('open');
  navEl.classList.add('position');
  navUntriggerEl.classList.add('open');
}

function toggleNav() {
  navTriggerEl.addEventListener('click', showNav);
  navUntriggerEl.addEventListener('click', hideNav);
  navItems.forEach((item) => {
    item.addEventListener('click', hideNav);
  });
}

const renderPopUp = (id) => {
  const markup = `<div class="popUpwindow__head flex-row">
    <p>${projectdetails[id].name}</p>
    <img
      src="images/X-Icon.svg"
      alt="X-Icon"
      style="cursor: pointer"
      class="Xpop"
    />
  </div>
  <img
    src="${projectdetails[id].featuredImage}"
    class="snapshoot"
    alt="Projectsneekpeak"
  />
  <p class="popUpWindow__text">${projectdetails[id].description}</p>
  <ul class="projects__item-language">
    <li>
      <img src="images/Rectangle.svg" alt="straightLine" />
    </li>
    <li class="projects__item-language-item">${projectdetails[id].technologies[0]}</li>
    <li>
      <img src="images/Rectangle.svg" alt="straightLine" />
    </li>

    <li class="projects__item-language-item">${projectdetails[id].technologies[1]}</li>
    <li>
      <img src="images/Rectangle.svg" alt="straightLine" />
    </li>
    <li class="projects__item-language-item">${projectdetails[id].technologies[2]}</li>
    <li>
      <img src="images/Rectangle.svg" alt="straightLine" />
    </li>
    <li class="projects__item-language-item">${projectdetails[id].technologies[3]}</li>
    <li>
      <img src="images/Rectangle.svg" alt="straightLine" />
    </li>
  </ul>
  <div class="popupWindow__button flex-row">
    <a href="#" class="button seeLive flex-row"
      >See Live <img src="images/Seelive.svg" alt="Golive"
    /></a>
    <a href="#" class="button flex-row seeLive"
      >See Source
      <img src="images/Icons/Vectorgithubicon.svg" alt="githubIcon"
    /></a>
  </div>`;

  popUpWindow.innerHTML = markup;
  for (let i = 0; i < PopUntriggerEl.length; i += 1) {
    PopUntriggerEl[i].addEventListener('click', () => {
      popUpWindow.classList.remove('showPopUp');
    });
  }
};

function togglePopUp() {
  for (let i = 0; i < seeProject.length; i += 1) {
    seeProject[i].addEventListener('click', (e) => {
      e.preventDefault();
      popUpWindow.classList.add('showPopUp');
      renderPopUp(e.target.id);
    });
  }
}

const renderProjectDetails = () => {
  let markup = '';
  projectdetails.forEach((elem, index) => {
    markup += `<div class="projects__item flex-column row${index + 1}">
  <img
    class="imgPlaceholder"
    src="${elem.featuredImage}"
    alt="ProjectPreview"
  />
  <div class="projectDetails">
    <h2 class="projects__item-name">${elem.name}</h2>
    <p class="projects__item-details">
    ${elem.description}
    </p>
    <ul class="projects__item-language">
      <li class="projects__item-language-item">${elem.technologies[0]}</li>
      <li>
        <img src="images/Rectangle.svg" alt="straightLine" />
      </li>

      <li class="projects__item-language-item">${elem.technologies[1]}</li>
      <li>
        <img src="images/Rectangle.svg" alt="straightLine" />
      </li>
      <li class="projects__item-language-item">${elem.technologies[2]}</li>
      <li>
        <img src="images/Rectangle.svg" alt="straightLine" />
      </li>
      <li class="projects__item-language-item">${elem.technologies[3]}</li>
    </ul>
    <a href="#" class="seeProject button" id=${index}>See project</a>
  </div>
</div>`;
  });

  projects.innerHTML = markup;
};

const formValidation = () => {
  submitButtonEl.addEventListener('click', (e) => {
    if (eMailEl.value !== eMailEl.value.toLowerCase()) {
      e.preventDefault();
      errorMessage.innerHTML = `The email should be in lowercase (${eMailEl.value.toLowerCase()})`;
    } else {
      errorMessage.innerHTML = '';
    }
  });
};

const formClick = () => {
  function formInfo() {
    const formData = {
      name: nameEl.value,
      email: eMailEl.value,
      text: textEl.value,
    };
    const formDataSerialized = JSON.stringify(formData);
    localStorage.setItem('form', formDataSerialized);
  }
  form.addEventListener('keyup', formInfo);
};

window.addEventListener('load', () => {
  const formDataDeserialized = JSON.parse(localStorage.getItem('form'));
  nameEl.value = formDataDeserialized.name;
  eMailEl.value = formDataDeserialized.email;
  textEl.value = formDataDeserialized.text;
});

toggleNav();
renderProjectDetails();
togglePopUp();
toggleNav();
formValidation();
formClick();
