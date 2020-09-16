
$(document).ready(function () {
  $("#header__search-input").keyup(function () {
    var search_key = $(this).val().toLowerCase();
    $(".search_item").show().filter(function () {
      $(this).text().toLowerCase().indexOf(search_key) == -1;
    }).hine();
  });
});