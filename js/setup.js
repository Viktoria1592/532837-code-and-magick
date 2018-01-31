'use strict';

var namesList = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNamesList = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorsList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorsList = ['black', 'red', 'blue', 'yellow', 'green'];

var makeBlockVisible = function (blockSelector) {
  var setupBlock = document.querySelector(blockSelector);
  setupBlock.classList.remove('hidden');
};

var generateRandomValue = function (array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  var randomValue = array[randomNumber];
  array.splice(randomNumber, 1);
  return randomValue;
};

var generateWizard = function () {
  var wizard = {
    name: generateRandomValue(namesList),
    lastName: generateRandomValue(lastNamesList),
    coatColor: generateRandomValue(coatColorsList),
    eyesColor: generateRandomValue(eyesColorsList)
  };
  return wizard;
};

makeBlockVisible('.setup');

var wizardsList = [generateWizard(), generateWizard(), generateWizard(), generateWizard()];

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');


for (var i = 0; i < wizardsList.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardsList[i].name + ' ' + wizardsList[i].lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsList[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsList[i].coatColor;

  setupSimilarList.appendChild(wizardElement);
}

makeBlockVisible('.setup-similar');
