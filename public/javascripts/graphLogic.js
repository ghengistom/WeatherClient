<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

 //make server get request to pi

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

