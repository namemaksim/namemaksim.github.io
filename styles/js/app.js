// document.getElementById('h__nav3').onmouseover = function(event) {
//     var target = event.target;
//     if (target.className == 'h__nav_2') {
//         var s = target.getElementsByClassName('submenu');
//         closeMenu();
//         s[0].style.display='block';
//     }
// }
// document.onmouseover=function(event) {
//     var target = event.target;
//     console.log(event.target)
//     if (target.className!='h__nav_2' && target.className!='submenu') {
//         closeMenu();
//     }
// }
// function closeMenu() {
//     var menu = document.getElementById('h__nav1');
//     var subm=document.getElementsByClassName('submenu');
//     for (var i=0; i < subm.length; i++){
//         subm[i].style.display='none';
//     }
// }

var el = document.getElementsByClassName('h__nav3');
for(var i=0; i < el.length; i++){
    el[i].addEventListener('mouseenter', shovSub, false);
    el[i].addEventListener('mouseleave', hideSub, false);
}
function shovSub(){
    if(this.children.length>1){
        this.children[1].style.height ='auto';
        this.children[1].style.opacity = '0.6'
        this.children[1].style.overflow = 'visible';
        this.children[1].style.display = 'block';
        this.children[1].style.background = 'black';
    }
    else{
        return false;
    }
}
function hideSub(){
    if(this.children.length>1){
        this.children[1].style.height ='0';
        this.children[1].style.opacity = '0';
        this.children[1].style.overflow = 'hidden';
    }
    else{
        return false;
    }
}
