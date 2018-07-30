//var client = new HttpClient();
//client.get('http://192.168.1.208:5000/gethistory', function(response) {
    // do something with response
    
//});

$.get( "http://47.153.171.2:9000/gethistory", function(data) {

    results = data;

    var dates = [];
    var temps = [];
    for(var i=0; i < results.length; ++i) {
    
    dates.push(results[i][0]);
    temps.push(results[i][1]);
}
TESTER = document.getElementById('tester');
Plotly.plot( TESTER, [{
x: dates,
y: temps }], {
margin: { t: 0 } } );
})     