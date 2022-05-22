//
<!DOCTYPE html>
<html>
    <head>
        <title>digital clock</title>
    </head>
//body
    <body>
        <div id="MyClockDisplay"></div>
        <script type="text/javascript">
        function showTime(){
            var date=new Date();
            var h =date.getHours();
            var m=date.getMinutes();
            var s=date.getSeconds();
            var sesson="AM";
            if(h==0){
                h=12;
            }
            if(h>12){
                h=h-12;
                sesson="PM";
            }
           h=(h<10)?"0"+h:h;
           m=(m<10)?"0"+m:m;
           s=(s<10)?"0"+s:s;
            var time = h +":"+m+":"+s;
            document.getElementById("MyClockDisplay").innerText=time;
            document.getElementById("MyClockDisplay").textContent=time;
            setTimeout(showTime,1000);
        }
        showTime();
        setInterval(showTime,1000);
        </script>
    </body>
</html>
