$(function () {

  var $results = $('#results');


  $.ajax({
    type: 'GET',
    url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=mEFtmwXR1fltqq8rPx8PKwTLKmktbqhO',
    success: function (results) {
      var items = results.results;
      
      $.each(items, function (i, item) {
        $results.append('<li> Section: ' + item.section + ', Subsection: '+ item.subsection + ',Title: ' + item.title + '</li>');
        console.log(item);
      });
    }
  });


});

