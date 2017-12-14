function getquote(){
    
     xhttp=new XMLHttpRequest();
     xhttp.onreadystatechange=function(){
         if(xhttp.readyState == 4 && xhttp.status == 200){
             var data = JSON.parse(xhttp.responseText);
             document.getElementById('quotes').innerHTML='<i class=" sup fa fa-quote-left"></i>  '+data[0].content +' <i class=" sup fa fa-quote-right"></i>';
             
         }
     }
     xhttp.open('GET', 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', true);
     xhttp.send();
 }
 getquote();