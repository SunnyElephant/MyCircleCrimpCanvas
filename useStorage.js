/**
 * Created by Administrator on 2015/12/9.
 */
var ta, btn_commit;

window.onload = function(){
    ta = document.getElementById("textarea");
    btn_commit = document.getElementById("btn_commit");

    btn_commit.onclick = function(){
        if(ta.value == ""){
            if(localStorage.valuetext != null){
                ta.value = localStorage.valuetext;
            }
        }
        alert(ta.value);
        if(ta.value != ""){
            localStorage.valuetext = ta.value;
        }
    }
}
