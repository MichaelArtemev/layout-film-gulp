"use strict";

var searchFunc = function searchFunc() {
  var searchTrigger = document.querySelector("#search-span");
  var textInput = document.querySelector("#search-input");

  searchTrigger.onclick = function () {
    textInput.value = 'sorry try later'.toUpperCase();
  };
};