            window.onload=function(){
              setInterval("NowTime()",1000); }
            function NowTime(){
                var time=new Date();
                var h=time.getHours();
                var m=time.getMinutes();
                var s=time.getSeconds();
                h=check(h);
                m=check(m);
                s=check(s);
                document.getElementById("nowtime").innerHTML=""+h+":"+m+":"+s;}
            function check(i){
                var num;
                i<10?num="0"+i:num=i;
                return num; }
                //--<div id="nowtime">在这里显示时间</div>
