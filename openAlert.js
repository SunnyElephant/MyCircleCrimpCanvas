/**
 * Created by Administrator on 2015/11/29.
 */
var box1, box2, img;

window.onload = function(){
    box1 = document.getElementById("box1");
    box2 = document.getElementById("box2");
    img = document.getElementById("img");

    box1.ondragover = function(e){
        e.preventDefault();
    };
    box2.ondragover = function(e){
        e.preventDefault();
    }
    img.ondragstart = function(e){
        e.dataTransfer.setData("img_Id", "img");
    };
    box1.ondrop = ondrophandler;
    box2.ondrop = ondrophandler
};

function ondrophandler(e){
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    if(file == null){
        var imgE = document.getElementById(e.dataTransfer.getData("img_Id"));
        e.target.appendChild(img);
    } else {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function(){
            e.target.innerHTML = "<img src = \"" + fileReader.result + "\">";
        };
    }

};

function showObj(e){
    var s = "";
    for(var k in e){
        s += k + ":" + e[k] + "<br/>";
    }
    msg.innerHTML = s;
}