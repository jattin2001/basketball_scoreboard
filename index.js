let homeCount = 0;
let guestCount = 0;
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeTeam = document.getElementById("home")
let guestTeam = document.getElementById("guest")

function hincrement1(){
    homeCount++;
    homeScore.textContent = homeCount; 
    lead();
}

function hincrement2(){
    homeCount = homeCount + 2;
    homeScore.textContent = homeCount; 
    lead();       
}


function hincrement3(){
    homeCount = homeCount + 3;
    homeScore.textContent = homeCount;   
    lead();     
}

function gincrement1(){
    guestCount++;
    guestScore.textContent = guestCount;
    lead();
}

function gincrement2(){
    guestCount = guestCount + 2;
    guestScore.textContent = guestCount;
    lead();
}


function gincrement3(){
    guestCount = guestCount + 3;
    guestScore.textContent = guestCount;   
    lead();      
}

function newGame(){
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    homeCount = 0;
    guestCount = 0;
    guestTeam.removeAttribute("id", "leading");
    homeTeam.removeAttribute("id", "leading");
}

function lead(){
    if(homeCount > guestCount){
        homeTeam.setAttribute("id", "leading");
        guestTeam.removeAttribute("id", "leading");  
    }
    else if(homeCount < guestCount){
        guestTeam.setAttribute("id", "leading");
        homeTeam.removeAttribute("id", "leading");          
    }
    else{
        homeTeam.removeAttribute("id", "leading");
        guestTeam.removeAttribute("id", "leading");          
    }
}



