let xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://thatsthespir.it/api', true)

    xhr.onload = function() 
        {
            if (this.status === 200) {

                var qString = JSON.parse(this.responseText);
                var qAut = qString.author;
                var quo = qString.quote;
                var qAuto = qString.permalink;
                var picture = qString.photo;

                document.getElementById("imgQuote").setAttribute("src",picture);
                document.getElementById("citaQuote").innerHTML = quo;
                document.getElementById('author').innerHTML = '<a href="' + qAuto + '" target="_blank">- ' + qAut + '</a>';
                console.log(qString);
                    
            } else {
                alert("Error!")
            }
                }
    xhr.send();