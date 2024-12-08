let show = () => {
    let name = document.getElementById("input").value;
    document.getElementById("h1").innerHTML="Wish you a very Happy New Year to "+name;
    document.getElementById("p").innerHTML="Happy Holidays! Merry Christmas! Merry Christmas and Happy New Year! Have a holly, jolly Christmas! Merry Christmas with a lot of love!"
    document.getElementById("img").src="./images/img.jpg"
    document.getElementById("img").style.width="800"
    document.getElementById("div").style.color="#FFFFFF";
    }
document.getElementById("button").addEventListener("click", show);