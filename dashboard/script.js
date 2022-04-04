var ctx = document.getElementById('myChart');

var energie = [4.15, 3.78, 3.68, 4.15, 4.30];
var frameworks = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

Chart.defaults.font.size = 16;
Chart.defaults.color = 'black';
var myChart = new Chart(ctx, {
    type: 'line',     
    data: { 
        labels: frameworks,
        datasets: [{ 
            label: 'Energie verbruik',
            data: energie,
            backgroundColor: 
            ["rgb(0,0,0);", 
            ],
            borderColor: 
            [  "rgba(0,0,0)",
            ],
            borderWidth: 1,
            borderRadius: 15, 
        }]   
    }, 
})




var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
   
  document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day : ' + daylist[day];