/**
 * Created by SZL4ZSY on 6/27/2016.
 */
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof(window.onload)!="function"){
        window.onload=func();
    }else{
        window.onload=function(){
            oldonload();
            func();
        };
    }
}

function addClass(element,value){
    if(!element.className){
        element.className=value;
    }else{
        var newClassName;
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}
function addFocus(){
    if(!document.getElementsByTagName)return false;
    var nav=document.getElementsByTagName("nav")[0];
    var links=nav.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        //document.write(links[i].href==window.location.href);
        if(links[i].href==window.location.href){
            addClass(links[i].parentNode,"active");
        }
    };
}
addLoadEvent(addFocus);
