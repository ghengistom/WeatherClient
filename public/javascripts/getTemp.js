src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"
$(document).ready(function() {
  $("#testbutton").click(function() {
      $.ajax({
          url: 'http://47.153.171.2:9000/gettemp',
          dataType: 'json',
          success: function(data) {
              //$("#results").append('all good');
              //alert(data);
              $("span").appendTo(displayTemp).append("<br>" + data + "<br>");
              
              
          },
           error: function() {
              $("#results").append("error");
              alert('error');
          }
      });
  });
});
