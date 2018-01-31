'use strict';

var wizardsNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;

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
    name: generateRandomValue(wizardsNames),
    lastName: generateRandomValue(wizardsLastNames),
    coatColor: generateRandomValue(wizardsCoatColors),
    eyesColor: generateRandomValue(wizardsEyesColors)
  };
  return wizard;
};

makeBlockVisible('.setup');

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
