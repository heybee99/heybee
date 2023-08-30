var date = new Date().toLocaleDateString()
        console.log(date);
        dateb.innerHTML= "" + date

        var date = new Date().toLocaleTimeString()
        console.log(date);
        timeb.innerHTML= "" + date 

        var song1 = new Audio('./Olamide_-_Celebrate.mp3')
        function lay() {
            song1.play() 
        }