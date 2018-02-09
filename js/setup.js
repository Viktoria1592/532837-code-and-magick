'use strict';

var wizardsNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var myWizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var myWizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballCollors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var makeBlockVisible = function (blockSelector) {
  var setupBlock = document.querySelector(blockSelector);
  setupBlock.classList.remove('hidden');
};

var generateRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};


var generateRandomValue = function (array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  var randomValue = array[randomNumber];
  array.splice(randomNumber, 1);
  return randomValue;
};

var generateWizard = function () {
  var wizard = {
    name: generateRandomValue(wizardsNames),
    lastName: generateRandomValue(wizardsLastNames),
    coatColor: generateRandomValue(wizardsCoatColors),
    eyesColor: generateRandomValue(wizardsEyesColors)
  };
  return wizard;
};

var wizardsList = [];

for (var i = 0; i < WIZARD_COUNT; i++) {
  wizardsList[i] = generateWizard();
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizardsList.length; j++) {
  fragment.appendChild(renderWizard(wizardsList[j]));
}
setupSimilarList.appendChild(fragment);

makeBlockVisible('.setup-similar');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');
var inputName = document.querySelector('input.setup-user-name');
var setupSubmitButton = document.querySelector('button.setup-submit');
var setupWizardForm = document.querySelector('form.setup-wizard-form');
var myWizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
var myWizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHendler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHendler);
};

var popupEscPressHendler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target === inputName) {
      evt.preventDefault();
    } else {
      closePopup();
    }
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupSubmitButton.addEventListener('click', function () {
  setupWizardForm.submit();
});

myWizardCoatColor.addEventListener('click', function () {
  myWizardCoatColor.style.fill = myWizardCoatColors[generateRandomNumber(0, myWizardCoatColors.length)];
});

myWizardEyesColor.addEventListener('click', function () {
  myWizardEyesColor.style.fill = myWizardsEyesColors[generateRandomNumber(0, myWizardsEyesColors.length)];
});

fireballColor.addEventListener('click', function () {
  fireballColor.style = 'background: ' + fireballCollors[generateRandomNumber(0, fireballCollors.length)];
});


