'use strict';

let value = 5;

function update_value() {
    $('#counter').html(value);
    $('#knob').width(value * 10 + '%');
}

$(document).ready(function() {
    update_value(value);

    $('#plus').click(function() {
        if (value < 10)
        value += 1;
        update_value(value);
    
    });
    $('#minus').click(function() { 
        if (value > 0)
        value -= 1;
        update_value(value);
    
    });
});


