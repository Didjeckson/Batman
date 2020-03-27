$(document).ready(function () {
 let tabsItem = $('.tabs-item');
 
 tabsItem.on('click', function(event){
  event.preventDefault();
  let activeContent = $(this).attr('href');
  $('.visible').togggleClass('visible');
  $(activeContent).togggleClass('visible');
  $(this).togggleClass('tabs-item-active');
 });


});