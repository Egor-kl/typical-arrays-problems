
exports.min = function min (array) {
    if (!array || array.length === 0) {
        return 0
    }
    var tmp; 
    for (var i = array.length - 1; i > 0; i--) {  
        var counter=0;
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
                counter++;
            }
        }  
        if(array.length ===0){
          break;
        } 
    }
    return array[0];
}

exports.max = function max (array) {
    if (!array || array.length === 0) {
        return 0
    }
    var tmp; 
    for (var i = array.length - 1; i > 0; i--) {  
        var counter=0;
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
                counter++;
            }
        }  
        if(array.length ===0){
          break;
        } 
    }
    return array[array.length-1];
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        return array.reduce((a, b) => (a + b)) / array.length;
    }
}
