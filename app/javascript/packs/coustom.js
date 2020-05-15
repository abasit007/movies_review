console.log("auto complete")
$(function() {
  $("#search").autocomplete({
    source: '/search',
  })
})