Template.options.events({
    'click #runtrail1': function(e,t){
        var trail1speed = document.getElementsByName('trail1speed')[0].value;
        
        document.getElementById('trail1').play();
        document.getElementById('trail1').playbackRate = trail1speed/7.2;  
    },

    'click #runtrail2': function(e,t){
        var trail2speed = document.getElementsByName('trail2speed')[0].value;
        document.getElementById('trail2').play();
        document.getElementById('trail2').playbackRate = trail2speed/7.3
    },
    
    'click #runtrail3': function(e,t){
        
        var trail3speed = document.getElementsByName('trail3speed')[0].value;
        document.getElementById('trail3').play();
        document.getElementById('trail3').playbackRate= trail3speed/7.3;
        
    }

});