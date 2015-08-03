// just to gen CP table and locate where to Debug
var CPt = genCP();
var classTable = genClassTable();

// key sequence handler, use to get text from textfield then slice
// and pass to check class function
function ksHandler() {

    dbug1 = document.getElementById("dbug1");
    dbug2 = document.getElementById("dbug2");
    dbug3 = document.getElementById("dbug3");

    // get the fullText of Textfield id:input in index.html
    fullText = document.getElementById("input").value;
    fullTextLength = fullText.length;

    // get all and the last key press
    all = fullText.slice(0, fullTextLength - 1);
    lastKey = fullText[fullTextLength - 1];

    // call the function then display
    retVal = keySequenceCheck(all, lastKey);

    input.value = retVal;

    dbug1.innerHTML = all;
    dbug2.innerHTML = lastKey;
    dbug3.innerHTML = retVal;
}

function keySequenceCheck(all, lastKey) {

    
    // the special case to check only the first to NOT having TONE and FOLLOWING Vowel infront
    checkFirst = all.concat(lastKey).charCodeAt(0);
    checkFirstClass = getClass(checkFirst);

    if ((checkFirst >= 3632 && checkFirst <= 3646) || (checkFirst >= 3653 && checkFirst <= 3662)){
        return '';

    // if the first is leading vowel, then need to reject everything except CONS
    }else if (checkFirstClass == 3){
        checkSecondClass = getClass(all.concat(lastKey).charCodeAt(1));
        
        if (checkSecondClass != 2 ){
            return lastKey;
        }
    }

    /*
     z = next character
     y = previous character
     x = character previous to y
     */

    // swap = y = [z, z = y][0];

    // extract base and xyz to be processed and concat
    base = all.slice(0, all.length - 2);
    x = all[all.length - 2];
    y = all[all.length - 1];
    z = lastKey;

    //convert xyz into ascii then classify
    xClass = getClass(x.charCodeAt(0));
    yClass = getClass(y.charCodeAt(0));
    zClass = getClass(z.charCodeAt(0));


    // 1st case if FV1 is in front of TONE
  if (yClass == 4 && (zClass == 10 || zClass == 12)) {
       
        // to handle with จระเข้
        if (xClass == zClass){
            x = [z, z = x][0];
            z = '';
            
        }else{
            y = [z, z = y][0];    
        }
        
    // 2nd case if LV1, FV1, TONE, AD2 has TONE OR //17th BV, reject
    } else if ( ([3, 4, 5].indexOf(yClass) != -1) && [7,8,9,11,10,12,13,14,15,16].indexOf(zClass) != -1) {
           // 16th case 2 times swapping
           if (xClass == 10){
               y = [z, z = y][0];
               x = [y, y = x][0];
               z = ''; 
           }else if (xClass == 2){
               y = [z, z = y][0];
               z = '';               
           }else{
               z = '';
           }
//         if ([10,12,13,14,15,16].indexOf(xClass) != -1){
//             x = [z, z = x][0];
//             z = '';    
//         }else{

//         }

    // 3rd case TONE + AV1-3 SWAP 
    // 18th x,z swapping if there is AV in front of TONE
    } else if (yClass == 10 && [14, 15, 16].indexOf(zClass) != -1) {
        if ([13,14,15,16].indexOf(xClass) != -1){
            x = [z, z = x][0];
            z = '';    
//         }else if (xClass == 2){
//             y = [z, z = y][0];
//             z = '';
        }
        else{
            y = [z, z = y][0];    
        }
        
    // 4th case DUPLICATE of ALL except ctrl,non,cons , reject
    }else if ([0, 1, 2].indexOf(yClass) == -1 && yClass == zClass) {
        
        // 19th case for เงาะ
        if(xClass == 2 && y.charCodeAt(0) == 3634 && z.charCodeAt(0) == 3632){
            
        }else{
            y = [z, z = y][0];
            z = '';
        }
        
    // 5th case karant and sara-i = swap, 
    }else if (yClass == 11){
            if (zClass == 14){
                y = [z, z = y][0];
            
            // for other ad, av reject

            // 
            }else if (xClass == 2 && [7,9].indexOf(zClass) != -1){
                y = [z, z = y][0];
                        
            // 10th case for replace of AV when it's with karant
            }else if ([7,14].indexOf(xClass) != -1 && [8,9,15,16].indexOf(zClass) != -1 ){
                x = [z, z = x][0];
                y = '';
                z = '';
            
            // M$ style with sara-u from สิทธิ์  + อุ = สิทธุ์
            }else if (xClass == 14 && zClass == 7){
                x = [z, z = x][0];
                z = '';
            
            // to replace with many vowel
            }else if ([8,9,10,12,13,15,16].indexOf(zClass) != -1){
                y = [z, z = y][0];
                z = '';
            }
           
    // 6th case for DUPLICATE of AV,BV type, reject 
    }else if ([3,4,5,6,7,8,12,13,14,15,16].indexOf(yClass) != -1 && [4,5,6,7,8,12,13,14,15,16].indexOf(zClass) != -1){
        y = [z, z = y][0];
        z = '';

    // 7th case for swapping if vowel before bv
    // 21th case for  ตตรั +ไม้โท + สระอุ
    }else if ([10,11,12,14,15,16].indexOf(yClass) != -1 && [7,8].indexOf(zClass) != -1){
        if ( x.charCodeAt(0) == 3633 ){
            x = [z, z = x][0];
            z = '';
        }else{
            y = [z, z = y][0];
        }
        
    // 8th case for reject above vowel with below vowel, reject
    }else if ([7,8].indexOf(yClass) != -1 && [14,15,16].indexOf(zClass) != -1){
        y = [z, z = y][0];
        z = '';

//     // 9th case for replace of BV when it's with karant
//     }else if ([7,8].indexOf(xClass) != -1 && [10,11].indexOf(yClass) != -1 && [7,8].indexOf(zClass) != -1){
//         x = [z, z = x][0];
//         z = '';

    // 10th case for replace of AV when it's with karant
    }else if ([14,15,16].indexOf(xClass) != -1 && yClass == 11 && [14,15,16].indexOf(zClass) != -1){
        x = [z, z = x][0];
        z = '';

    // 11th case sara-um with tone
    }else if (xClass == 10 && y.charCodeAt(0) == 3635 && zClass == 10){
        x = [z, z = x][0];
        z = '';   

    // 12th case to reject all vowel out of karant
//     }else if (y.charCodeAt(0) == 3660 && [8,9,10,12,13,15,16].indexOf(zClass) != -1){
//         y = [z, z = y][0];
//         z = '';

    // 13th case to reject karant out of all vowel
    }else if ([8,9,10,12,13,15,16].indexOf(yClass) != -1 && z.charCodeAt(0) == 3660){
        y = [z, z = y][0];
        z = '';        

    // 14th case dealing with mai taikhu
    }else if (yClass == 12 && zClass == 10 ){
        y = [z, z = y][0];
        z = '';
                
    // 15th case the opposite of 14th 
    }else if (yClass == 10 && zClass == 12 ){
        y = [z, z = y][0];
        z = '';        
    // a1 case LV with FV
    }else if (yClass == 3 && [0,1,2].indexOf(zClass) == -1){
        z = '';                
    // a2 case for LV + CONS + BV1,AD1,mai hun a kad
    }else if ((xClass == 3 && x.charCodeAt(0) != 3648) && yClass == 2 && [7,8,11].indexOf(zClass) != -1 || z.charCodeAt(0) == 3633){
        x = '';
    }

    return base.concat(x).concat(y).concat(z);
}

function klear(){
     document.getElementById("input").value = "";
     document.getElementById("dbug1").innerHTML = "";
     document.getElementById("dbug2").innerHTML = "";
     document.getElementById("dbug3").innerHTML = "";
}

function getClass(ch) {

    // check for control char and delete
    if (( ch >= 0 && ch <= 31 ) || ch == 127 ) {

        return 0; // return 'CTRL';

        // check for all English alphabets, numeral, angkhakhu, fongnam,
        // khomut,maiyamok,baht sign
    } else if (( ch >= 65 && ch <= 122 ) || ( ch >= 3663 && ch <= 3675 )) {

        return 1; // return 'NON';

        // check for all consonant Thai character
    } else if ((ch >= 3585 && ch <= 3630 ) || ( ch >= 32 && ch <= 64 ) || ( ch >= 91 && ch <= 96 ) || ( ch >= 123 && ch <= 126 )) {

        return 2; // return 'CONS'
    } else {

        // if not in the above range, then look up in classTable
        return classTable[ch];
    }

}

function genClassTable() {

    var table = {

        // Mai ya mok
        3654: 1,

        
        // Leading Vowel return 'LV'
        3648: 3,
        3649: 3,
        3650: 3,
        3651: 3,
        3652: 3,

        // Following vowels type 1 return 'FV1'
        3632: 4,
        3634: 4,
        3635: 4,

        // Following vowels type 2 return 'FV2'
        3653: 5,

        // Following vowels type 3 return 'FV3'
        3620: 6,
        3622: 6,

        // Below vowel type 1 return 'BV1' sara-u
        3640: 7,

        // Below vowel type 2 return 'BV2' sara-uu
        3641: 8,

        // BD(UNDERDOT) pinthu
        3642: 9,

        // TONE return 'TONE'
        3656: 10,
        3657: 10,
        3658: 10,
        3659: 10,

        // Above Diacritics type 1 return 'AD1' karant
        3660: 11,
        3661: 11,

        // Above Diacritics type 2 return 'AD2'
        3655: 12,

        // Above Diacritics type 3 return 'AD3'
        3662: 13,

        // Above Vowel type 1 return 'AV1'
        3636: 14,

        // Above Vowel type 2 return 'AV2'
        3633: 15,
        3638: 15,

        // Above Vowel type 3 return 'AV3'
        3637: 16,
        3639: 16
    };

    return table;
}
function genCP() {
    
    var tabl = new Array(17);
    for (var i = 0; i < 17; i++) {
        tabl[i] = new Array(17);
    }

    // load value to array
    s0 = ['X', 'A', 'A', 'A', 'A', 'A', 'A', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s1 = ['X', 'A', 'A', 'A', 'S', 'S', 'A', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s2 = ['X', 'A', 'A', 'A', 'A', 'S', 'A', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'];
    s3 = ['X', 'S', 'A', 'S', 'S', 'S', 'S', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s4 = ['X', 'A', 'A', 'A', 'A', 'S', 'A', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s5 = ['X', 'A', 'A', 'A', 'A', 'S', 'A', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s6 = ['X', 'A', 'A', 'A', 'S', 'A', 'S', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s7 = ['X', 'A', 'A', 'A', 'A', 'S', 'A', 'R', 'R', 'R', 'C', 'C', 'R', 'R', 'R', 'R', 'R'];
    s8 = ['X', 'A', 'A', 'A', 'S', 'S', 'A', 'R', 'R', 'R', 'C', 'R', 'R', 'R', 'R', 'R', 'R'];
    s9 = ['X', 'A', 'A', 'A', 'S', 'S', 'A', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s10 = ['X', 'A', 'A', 'A', 'A', 'A', 'A', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s11 = ['X', 'A', 'A', 'A', 'S', 'S', 'A', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s12 = ['X', 'A', 'A', 'A', 'S', 'S', 'A', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s13 = ['X', 'A', 'A', 'A', 'S', 'S', 'A', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    s14 = ['X', 'A', 'A', 'A', 'S', 'S', 'A', 'R', 'R', 'R', 'C', 'C', 'R', 'R', 'R', 'R', 'R'];
    s15 = ['X', 'A', 'A', 'A', 'S', 'S', 'A', 'R', 'R', 'R', 'C', 'R', 'R', 'R', 'R', 'R', 'R'];
    s16 = ['X', 'A', 'A', 'A', 'S', 'S', 'A', 'R', 'R', 'R', 'C', 'R', 'C', 'R', 'R', 'R', 'R'];

    for (var i = 0; i < 17; i++) {
        tabl[0][i] = s0[i];
        tabl[1][i] = s1[i];
        tabl[2][i] = s2[i];
        tabl[3][i] = s3[i];
        tabl[4][i] = s4[i];
        tabl[5][i] = s5[i];
        tabl[6][i] = s6[i];
        tabl[7][i] = s7[i];
        tabl[8][i] = s8[i];
        tabl[9][i] = s9[i];
        tabl[10][i] = s10[i];
        tabl[11][i] = s11[i];
        tabl[12][i] = s12[i];
        tabl[13][i] = s13[i];
        tabl[14][i] = s14[i];
        tabl[15][i] = s15[i];
        tabl[16][i] = s16[i];
    }

    return tabl;
}

