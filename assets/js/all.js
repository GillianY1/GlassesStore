"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('hello Gillian!');
});
$(function () {
  var $li = $('ul.serial-list li');
  $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
  $li.click(function () {
    $($(this).find('a').attr('href')).show().siblings('.tab-inner').hide();
    $(this).addClass('active').siblings('.active').removeClass('active');
  });
});
//# sourceMappingURL=all.js.map
