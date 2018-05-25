//var client = new HttpClient();
//client.get('http://192.168.1.208:5000/gethistory', function(response) {
    // do something with response
    
//});

$.get( "http://192.168.1.208:5000/gethistory", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
  });