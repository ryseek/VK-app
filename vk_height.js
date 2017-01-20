VK.init(
    function(){
    });
function autosize(width) {
    //Проверяем элемент body на наличие.
    if (!document.getElementById('body')) {
        alert('error');
        return;
    }
    // Успешно ли подключен ВК скрипт
    if (typeof VK.callMethod != 'undefined') {
        /*
         Вызываем функцию vk js api для управления окном.
         VK.callMethod('функция', параметры)
         В данном случае у нас - VK.callMethod('изменение_размеров_окна', ширина, высота);
         Так же добавляем еще 60 пикселей что бы было небольшое расстояние.
         */
        VK.callMethod('resizeWindow', 840, document.getElementById('body').clientHeight + 60);
    } else {
        alert('error #2');
    }
}
$(document).ready( function(){
    //Вызываем функцию регулировки высоты каждые пол секунды.
    setInterval('autosize(607)', 500);
});