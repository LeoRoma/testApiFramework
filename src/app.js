$(function () {

  var $results = $('#results');


  $.ajax({
    type: 'GET',
    url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=mEFtmwXR1fltqq8rPx8PKwTLKmktbqhO',
    success: function (results) {
      $.each(results, function (i, result) {
        $results.append('<li>result: ' + result);
      });
    }
  });


});

