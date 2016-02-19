// Take the G Element if we have any.
"use strict";
var g = g || {};

g.pinterest = function(board, token, wrapper) {
    this.board   = null;
    this.token   = null;
    this.wrapper = null;
    this.data    = null;
    this.url     = null;
    this.run     = 0;
    this.string  = "https://api.pinterest.com/v1/boards/gkiokan1337/ladies/pins/?access_token=AdBmHtLRaaAglfgb5HWqRpZN_CwkFDRqWtuNvWtCyuuv-4BC8QAAAAA&fields=id%2Clink%2Cnote%2Curl";
    
    // save this stuff in the obj.
    this.board   = board;
    this.token   = token; 
    this.wrapper = wrapper;
    
    
    this.render  = function(){
        var wrapper = $(this.wrapper);
        if(this.data==null){                        
            // If there is no Data, give a Message out and increse the run number.
            // Stop getting data if we hit this point at last 3 times.        
            wrapper.html("<p class='alert alert-danger'>Ouhhh, no Data stored in the Object, magic borkes :(</p>");
            
            if(this.run<3){           
                //this.get_data();
                console.log("adding a run");
                this.run ++;
            }
        }
        else {
            wrapper.html(this.data);   
        }        
    }
    
    // Setup the string
    this.setup_url = function(){
        this.url = "https://api.pinterest.com/v1/boards/" + this.board + "/pins/?acess_token=" + this.token + "&fields=id%2Clink%2Cnote%2Curl";
        console.log(this.url);
    }
    
    // Get Data
    this.get_data = function(){
        this.data = "retrieving .... ";
        
        $.getJSON(this.string).done(function(result){
            this.data = result;
            console.log(this.data);
            this.render(); 
        });
    }
    
    
    
    // After anything is finshed, run the engine
    this.setup_url();
    this.get_data();
    
    return this;
}