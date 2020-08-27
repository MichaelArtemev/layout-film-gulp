@@include('timer.js');

@@include('burger.js');

@@include('slider.js');

@@include('search.js');

burgerFunc();
searchFunc();
sliderFunc();
clockFunc();



alertMsg();

function alertMsg(){
    const message = "Если вы запускаете сайт через gulp и находитесь на localhost: - webp файлы не успевают конвертироваться с 1 раза, просто нажмите f5 если увидите ошибки в консоли";
    alert(message);
    console.log(message);
}