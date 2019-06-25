$(function() {
  setWidthRow();

  function setWidthRow() {
    $.each($(".dropdown-menu"), function(index, menu) {
      var $row = $(menu).find(".row");
      var colLength = $row.find(".col-sm").length;
      $row.addClass("wd-" + colLength * 250);
    });
  }
})
