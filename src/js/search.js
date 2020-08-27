const searchFunc = () => {
    const searchTrigger = document.querySelector("#search-span");
    const textInput = document.querySelector("#search-input");

    searchTrigger.onclick = function () {
        textInput.value = 'sorry try later'.toUpperCase();
    }
}