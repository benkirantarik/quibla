// Start Create ListedHex Array Function

var liste = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
var listeHex = [];
var str;
var str1;
var str2;
var n = 0;

for(var i = 0 ; col !== 'ff' ; i++){
    if(i%16 == 0 && i !== 0){n++};
    str2 = liste[i%16];str1 = liste[n];
    var col = str1 + str2;
    listeHex.push(col);
}

// End Create ListedHex Array Function

// Start Convert Hex To Rgb Function

function convertHexToRgb(color){
    
    var liste = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var listeHex = [];
    var str;
    var str1;
    var str2;
    var n = 0;

    for(var i = 0 ; col !== 'ff' ; i++){if(i%16 == 0 && i !== 0){n++};str2 = liste[i%16];str1 = liste[n];
        var col = str1 + str2;
        listeHex.push(col);
    }
    
    var cleanHex = color.slice(1,7);
    var red = color.slice(1,3);
    var green = color.slice(3,5);
    var blue = color.slice(5,7);
    var rgba = 'rgba( '+listeHex.indexOf(red)+', '+listeHex.indexOf(green)+', '+listeHex.indexOf(blue)+',1)';
    return rgba;
}

// End Convert Hex To Rgb Function

// Start Convert Rgb To Hex Function

function convertRgbToHex(color,arr){
    var write = false;
    var rgbArray = [];
    var str = '';
    for(var i = 0 ; i < color.length ; i++){
        if(!isNaN(color[i])){write = true;str+=color[i]}else{if(str !== ''){rgbArray.push(Number(str))};str = '';write = false}
    }
    var hex = '#'+arr[rgbArray[0]]+arr[rgbArray[1]]+arr[rgbArray[2]];
    return hex;
}

// End Convert Rgb To Hex Function