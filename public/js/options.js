//alert("Reading js/options.js");

document.getElementById('runtrail1').onclick = function() {
    
    var trail1speed = document.getElementsByName('trail1speed')[0].value;
    
    document.getElementById('trail1').play();
    document.getElementById('trail1').playbackRate = trail1speed/7.2;
},
    
document.getElementById('runtrail2').onclick = function() {
    
    var trail2speed = document.getElementsByName('trail2speed')[0].value;
    
    document.getElementById('trail2').play();
    document.getElementById('trail2').playbackRate = trail2speed/7.3;
},
    
document.getElementById('runtrail3').onclick = function() {
    
    var trail2speed = document.getElementsByName('trail3speed')[0].value;
    
    document.getElementById('trail3').play();
    document.getElementById('trail3').playbackRate = trail2speed/7.3;
}
    
