/**
 * Created by Administrator on 2015/12/13.
 */
window.onload = function(){
    var css = document.createElement("style");
    css.type = "text/css";
    css.appendChild(document.createTextNode("#mdiv{background-color: blue}"));
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(css);
};