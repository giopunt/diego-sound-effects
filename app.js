(function(){
    var Machine = function() {
        this.audioTrack = undefined;
        this.bindEvents();
    };

    Machine.prototype.bindEvents = function(){
        var effects = document.querySelectorAll('#effects li');
        for (var i = 0; i < effects.length; i++) {
            effects[i].addEventListener("click", this.playSound.bind(this), false);
            effects[i].addEventListener("touchend", this.touchEnd.bind(this), false);
            effects[i].addEventListener("mouseup", this.touchEnd.bind(this), false);
            effects[i].addEventListener("touchstart", this.touchStart.bind(this), false);
            effects[i].addEventListener("mousedown", this.touchStart.bind(this), false);
        }
    };

    Machine.prototype.touchStart = function(event){
        event.target.className = 'touch';
    };

    Machine.prototype.touchEnd = function(event){
        var target = event.target;
        setTimeout(function(){
          target.className = '';
        }, 100);
    };

    Machine.prototype.playSound = function(event){
        if(this.audioTrack){
            this.audioTrack.pause();
            this.audioTrack = undefined;
        }

        if(event.target.querySelector('audio')){
            this.audioTrack = event.target.querySelector('audio');
            this.audioTrack.currentTime = 0;
            this.audioTrack.play();
        }
    };

    var player = new Machine();

})();
