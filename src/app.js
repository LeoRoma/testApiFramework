$(function () {

  var $results = $('#results');


  $.ajax({
    type: 'GET',
    url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=mEFtmwXR1fltqq8rPx8PKwTLKmktbqhO',
    success: function (results) {
      var items = results.results;
      console.log(items);
      $.each(items, function (i, item) {
        $results.append('<li>result: ' + item.title);
      });
    }
  });


});

