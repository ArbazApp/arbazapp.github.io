function show_nav() {


    let nav = document.querySelector(".nav");

    nav.style.width = "100%";

    nav.style.overflowX = "show";
}

function hide_nav() {
    let nav = document.querySelector(".nav");

    nav.style.width = "0%";

    nav.style.overflowX = "hidden";
}

function copyright() {

    let footer = document.querySelector(".footer");

    footer.innerHTML = "<p>Copyright &copy; By Arbazapp ." + new Date().getFullYear() + " </p>";
}

copyright();

function top_panel() {

    let greeting = document.querySelector(".greeting");

    let clock = document.querySelector(".clock");

    let date = document.querySelector(".date");

    let time = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();

    clock.innerHTML = time;

    let dateData = new Date().toDateString();

    date.innerHTML = dateData;

    date.style.backgroundColor = "rgb(num,num,num)";

    let checktime = new Date().getHours();

    if (checktime < 12) {
        greeting.innerHTML = "<p>Good Morning</p>"
        greeting.style.backgroundColor = "white";
        greeting.style.color = "black";
    } else if (checktime < 17) {
        greeting.innerHTML = "<p>Good Afternoon</p>";
        greeting.style.backgroundColor = "orange";
    } else if (checktime < 20) {
        greeting.innerHTML = "<p>Good Evening</p>";
        greeting.style.backgroundColor = "hsl(222,100%,50%)";
        greeting.style.color = "white";
    } else if (checktime < 24 || checktime > 0) {
        greeting.innerHTML = "<p>Good Night</p>";

        greeting.style.backgroundColor = "rgb(33,33,33)"
    }

    // ============================================== 
    let docmodifiedtime = document.lastModified;

    let docinfo = document.querySelector(".doc_info");

    docinfo.innerHTML = "<p>Last Modified  At : " + docmodifiedtime + " </p>";

}

setInterval(top_panel, 100);
