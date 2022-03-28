var ctx = document.getElementById('myChart');

var stars = [4.15, 3.78, 3.68, 4.15, 4.30];
var frameworks = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

var myChart = new Chart(ctx, {
    type: 'line',     
    data: { 
        labels: frameworks,
        datasets: [{ 
            label: 'Energie verbruik',
            data: stars,
            backgroundColor: 
            ["rgba(255, 99, 132, 0.2)",
             "rgba(54, 162, 235, 0.2)",
             "rgba(255, 206, 86, 0.2)",
             "rgba(75, 192, 192, 0.2)",
             "rgba(153, 102, 255, 0.2)" 
            ],
            borderColor: 
            [  "rgba(255, 99, 132, 1)",
             "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
               "rgba(75, 192, 192, 1)",
               "rgba(153, 102, 255, 1)", 
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