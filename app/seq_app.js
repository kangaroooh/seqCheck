/*
TODO:
    There is still a bug for non C state
*/
// just to gen CP table and locate where to Debug
var classTable = genClassTable();
var state = 0;
var backup_state = 0;

// key sequence handler, use to get text from textfield then slice
// and pass to check class function
function ksHandler(event) {

    var dbug1 = document.getElementById("dbug1"),
        dbug2 = document.getElementById("dbug2"),
        dbug3 = document.getElementById("dbug3"),
        input = document.getElementById("input");

    // just for checking shift(16) and caps lock(20) to not proceed
    if (event.keyCode == 16 || event.keyCode == 20) {
        return input.value;
    }

    // get the fullText of Textfield id:input in index.html
    var fullText = input.value,
        fullTextLength = fullText.length,

        // get all and the last key press
        all = fullText.slice(0, fullTextLength - 1),
        lastKeyTxt = fullText[fullTextLength - 1],
        lastKeyCode = event.keyCode || event.charCode;

    // if it is a backspace then just update the state
    if (event.keyCode === 8) {
        state = getCurrentState(fullText);
    } else {
        fullText = keySequenceCheck(all, lastKeyTxt);
    }


    // display data
    input.value = fullText;

    dbug1.innerHTML = all;
    dbug2.innerHTML = lastKeyTxt;
    dbug3.innerHTML = fullText;

    console.log(state);
}

/*
    keySequenceCheck(fullText)
    argument : fullText (value from textbox)
    return : a String which is already processed


    Use state as a global state to keep track of where the you are then get into each state by lastKeyClass
    As you can see from the FSM diagram

    The idea is that it will redirect you to a particular state, then determine whether the lastKey should be
    accepted or not.

    Please debug for more understanding.


*/

function keySequenceCheck(all, lastKeyTxt) {

    backup_state = state;

    // this chunk is just seperating the lastKey from fullText then classify it
    var allLength = all.length,
        base = all.slice(0, allLength - 2),

        x = all[allLength - 2] || '',
        y = all[allLength - 1] || '',
        z = lastKeyTxt;

    if (x != null) {
        var xClass = getClass(x.charCodeAt(0));
    }
    if (y != null) {
        var yClass = getClass(y.charCodeAt(0));
    }
    if (z != null) {
        var zClass = getClass(z.charCodeAt(0));
    }

    var checkAll = false;

    switch (state) {
    case 0: // start
        switch (zClass) {
        case 1:
            state = 0;
            break;
        case 2:
            state = 2;
            break;
        case 3:
            state = 3;
            break;
        case 4:
            state = 4;
            break;
        case 5:
            state = 5;
            break;
        case 6:
            state = 6;
            break;
        case 11:
            state = 11;
            break;
        default:
            state = 0;
            z = '';
            break;
        }
        break;
    case 11:
        switch (zClass) {
        case 10:
            state = 0;
            break;
        default:
            checkAll = true;
        }
        break;

    case 3:
        switch (zClass) {
        case 2:
            state = 31;
            break;
        case 3:
            y = '';
            state = 3;
            break;
        case 4:
            y = '';
            state = 4;
            break;
        case 5:
            y = '';
            state = 5;
            break;
        case 6:
            y = '';
            state = 6;
            break;
        default:
            z = '';
            break;
        }
        break;
    case 4:
        switch (zClass) {
        case 2:
            state = 41;
            break;
        case 3:
            y = '';
            state = 3;
            break;
        case 4:
            y = '';
            state = 4;
            break;
        case 5:
            y = '';
            state = 5;
            break;
        case 6:
            y = '';
            state = 6;
            break;
        default:
            z = '';
            break;
        }
        break;
    case 5:
        switch (zClass) {
        case 2:
            state = 51;
            break;
        case 3:
            y = '';
            state = 3;
            break;
        case 4:
            y = '';
            state = 4;
            break;
        case 5:
            y = '';
            state = 5;
            break;
        case 6:
            y = '';
            state = 6;
            break;
        default:
            z = '';
            break;
        }
        break;
    case 6:
        switch (zClass) {
        case 2:
            state = 61;
            break;
        case 3:
            y = '';
            state = 3;
            break;
        case 4:
            y = '';
            state = 4;
            break;
        case 5:
            y = '';
            state = 5;
            break;
        case 6:
            y = '';
            state = 6;
            break;
        default:
            z = '';
            break;
        }
        break;
        // the cons case
    case 2:
        switch (zClass) {
            // BV1, AV1
        case 12:
        case 19:
            state = 211;
            break;
            // AD1-3, BD
        case 16:
        case 17:
        case 18:
        case 14:
            state = 215;
            break;
            // BV2-AV2
        case 13:
        case 20:
            state = 212;
            break;
            // AV3
        case 21:
            state = 213;
            break;
        case 15:
            state = 214;
            break;
        case 8: // sara aa
            state = 2142;
            break;
        case 7: // sara a
        case 9: // sara aum
            state = 2143;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
        // C1 is here
    case 211:
        switch (zClass) {
        case 15:
        case 16:
            state = 2111;
            break;
            // in case of replace
            //C1
        case 12:
        case 19:
            y = '';
            state = 211;
            break;
            // C2
        case 13:
        case 20:
            y = '';
            state = 212;
            break;
            // C3
        case 21:
            y = '';
            state = 213;
            break;
            //C5

        case 17:
        case 18:
        case 14:
            y = '';
            state = 215;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
        // C2 is here
    case 212:
        switch (zClass) {
        case 15:
            state = 2111;
            break;
            // in case C1 appear
        case 12:
        case 19:
            y = '';
            state = 211;
            break;
            // in case C2,3,5 appear
        case 13:
        case 20:
            y = '';
            state = 212;
            break;
        case 21:
            y = '';
            state = 213;
            break;
            //C5

        case 14:
        case 17:
            y = '';
            state = 215;
            break;
        case 16:
        case 18:
            z = '';
            state = 215;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
        // C3 is here
    case 213:
        switch (zClass) {
        case 15:
            state = 2111;
            break;
            // in case C1,C2,3,5 appear
        case 12:
        case 19:
            y = '';
            state = 211;
            break;
            // BV2-AV2
        case 13:
        case 20:
            y = '';
            state = 212;
            break;
        case 21:
            y = '';
            state = 213;
            break;
            //C5
        case 14:
        case 17:
            y = '';
            state = 215;
            break;
        case 16:
        case 18:
            z = '';
            state = 215;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
        // C4 is here
    case 214:
        switch (zClass) {
        case 8: // sara aa
            state = 2142;
            break;
        case 7: // sara a
        case 9: // sara aum
            state = 2144;
            break;
        case 16:
            y = '';
            state = 215;
            break;
        case 17:
        case 18:
        case 14:
            y = '';
            state = 215;
            break;
        case 15:
            y = '';
            state = 214;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 215:
        // in case C1,C2,C3,C5 appear
        switch (zClass) {
        case 12:
        case 19:
            y = '';
            state = 211;
            break;
            // BV2-AV2
        case 13:
        case 20:
            y = '';
            state = 212;
            break;
        case 21:
            y = '';
            state = 213;
            break;
        case 16:
        case 15:
            if (yClass == 17 || yClass == 14) {
                z = '';
                state = 215;
            } else if (yClass == 16) {
                y = '';
                state = 215;
            }
            break;
        case 14:
        case 17:
            y = '';
            state = 215;
            break;
        case 18:
            z = '';
            state = 215;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 2142:
        switch (zClass) {
        case 7:
            state = 0;
            break;
        case 8:
        case 9:
            if (xClass == 15) { // with tone
                y = '';
                state = 2144;
            } else {
                y = '';
                state = 2143;
            }
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 2143:
        switch (zClass) {
        case 7: //aa/aum
        case 9:
            y = '';
            state = 2143;
            break;
        case 8:
            y = '';
            state = 2142;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 2144:
        switch (zClass) {
        case 7: //aa/aum
        case 9:
            y = '';
            state = 2143;
            break;
        case 8:
            y = '';
            state = 2142;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 2111:
        switch (zClass) {

        case 14:
        case 17:
            y = '';
            state = 215;
            break;

        case 16:
        case 18:
            y = '';
            state = 215;
            break;

        case 15:
            y = '';
            state = 2111;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 31:
        switch (zClass) {
        case 19:
        case 21:
            state = 33;
            break;
        case 17:
            state = 35;
            break;
        case 15:
            state = 32;
            break;
        case 7:
            state = 0;
            break;
        case 8:
            state = 32;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 33:
        switch (zClass) {
        case 19:
        case 21:
            y = '';
            state = 33;
            break;
        case 17:
            y = '';
            state = 35;
            break;
        case 15:
            state = 331;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 331:
        switch (zClass) {
        case 15:
            y = '';
            state = 331;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 32:
        switch (zClass) {
        case 19:
        case 21:
            y = '';
            state = 33;
            break;
        case 17:
            y = '';
            state = 35;
            break;
        case 7:
            state = 0;
            break;
        case 8:
            state = 321;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 35:
        switch (zClass) {
        case 19:
        case 21:
            y = '';
            state = 33;
            break;
        case 15:
            y = '';
            state = 32;
            break;
        }

        break;
    case 321:
        switch (zClass) {
        case 7:
            state = 0;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 41:
        switch (zClass) {
        case 17:
            state = 45;
            break;
        case 15:
            state = 42;
            break;
        case 7:
            state = 0;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 42:
        switch (zClass) {
        case 17:
            y = '';
            state = 45;
            break;
        case 7:
            state = 0;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 45:
        switch (zClass) {
        case 15:
            y = '';
            state = 42;
            break;
        default:
            checkAll = true;
            break;

        }
        break;
    case 51:
        switch (zClass) {
        case 15:
            state = 52;
            break;
        case 7:
            state = 0;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 52:
        switch (zClass) {
        case 7:
            state = 0;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    case 61:
        switch (zClass) {
        case 15:
            state = 0;
            break;
        default:
            checkAll = true;
            break;
        }
        break;
    default:
        z = '';
        break;
    }
    // one last check to check dotted
    if (checkAll) {
        switch (zClass) {
        case 2:
            state = 2;
            break;
        case 3:
            state = 3;
            break;
        case 4:
            state = 4;
            break;
        case 5:
            state = 5;
            break;
        case 6:
            state = 6;
            break;
        case 1:
            state = 0;
            break;
        case 11:
            state = 11;
            break;
        default:
            state = backup_state;
            z = '';
            break;
        }
        checkAll = false;
    }
    return base.concat(x).concat(y).concat(z);
}

/*
    getCurrentState(fullText)

    This function will determine the state in the FSM. it is useful when working with backspace
    z is the last character in the string
    y is the character before z
    x,w follow the same principle of y

    The idea is to read the fullText string from end to start to find
    1. unique case (ex. z is in BV1, so it must be at the state 211 only)
    2. correlation case (ex. z is tone, x is LV1. it's obvious that it must be at 32)
    return state
*/
function getCurrentState(fullText) {

    var fullTextLength = fullText.length;

    if (fullTextLength == 0) {
        return 0;
    }
    base = fullText.slice(0, fullTextLength - 4),

        w = fullText[fullTextLength - 4],
        x = fullText[fullTextLength - 3],
        y = fullText[fullTextLength - 2],
        z = fullText[fullTextLength - 1];

    if (w != null) {
        var wClass = getClass(w.charCodeAt(0));
    }
    if (x != null) {
        var xClass = getClass(x.charCodeAt(0));
    }
    if (y != null) {
        var yClass = getClass(y.charCodeAt(0));
    }
    if (z != null) {
        var zClass = getClass(z.charCodeAt(0));
    }



    switch (zClass) {

        //only for dotted case
    case 11:
        state = 11;
        break;
    case 3:
        state = 3;
        break;
    case 4:
        state = 4;
        break;
    case 5:
        state = 5;
        break;
    case 6:
        state = 6;
        break;

    case 1:
    case 7:
    case 9:
    case 14:
    case 16:
    case 17:
    case 18:
    case 111:
        state = 0;
        break;


        // BV1
    case 12:
        state = 211;
        break;

    case 20:
    case 13:
        state = 212;
        break;


        // cons case
    case 2:
        switch (yClass) {
        case 3:
            state = 3;
            break;
        case 4:
            state = 4;
            break;
        case 5:
            state = 5;
            break;
        case 6:
            state = 6;
            break;
        default:
            state = 2;
            break;
        }
        break;

        // AV1 case
    case 19:
        switch (xClass) {
        case 3:
            state = 33;
            break;
        default:
            state = 211;
        }
        break;

        // AV3 case
    case 21:
        switch (xClass) {
        case 3:
            state = 33;
            break;
        default:
            state = 213;
        }
        break;

        // TONE case
    case 15:
        if (wClass == 3) {
            state = 0;
            break;
        }
        if (yClass == 2) {
            if (xClass != 3 && xClass != 4 && xClass != 5 && xClass != 6) {
                state = 214;
                break;
            }
        }
        switch (xClass) {
        case 3:
            state = 32;
            break;
        case 4:
            state = 42;
            break;
        case 5:
            state = 52;
            break;
        case 6:
            state = 0;
            break;
        default:
            state = 0;
        }
        break;

        // deals with sara -aa
    case 8:
        if (wClass == 3) {
            state = 0;
        } else {
            state = 2142;
        }
        break;


    }
    return state;
}

/*
    klear() function
    it's almost useless, just to clear the input textarea, debug value and state
    but it's great for lazy people though

    this function will be called by the reset button in html

    return : none
*/
function klear() {
    document.getElementById("input").value = "";
    document.getElementById("dbug1").innerHTML = "";
    document.getElementById("dbug2").innerHTML = "";
    document.getElementById("dbug3").innerHTML = "";
    state = 0;
    backup_state = 0;
}

/*
    getClass(ch) function
    argument : character in ascii format
    return : class of the argument character

    This function is used to classify the class of specific THAI character. It's a BIG THAI over there.
    There existed 'CTRL' class once. I just leave the commented code here, in case anyone would like
    to further develop it
*/
function getClass(ch) {
    /*
  // check for control char and delete
  if ((ch >= 0 && ch <= 31) || ch === 127) {

  return 'CTRL'; // return 'CTRL';

  // check for all English alphabets, numeral, angkhakhu, fongnam,
  // khomut,maiyamok,baht sign
} else*/
    if ((ch >= 65 && ch <= 122) || (ch >= 3663 && ch <= 3675) || ch == 32) {

        return 1; // return 'NON';

        // check for all consonant Thai character
    } else if ((ch >= 3585 && ch <= 3619) || (ch >= 33 && ch <= 64) || (ch >= 91 && ch <= 96) || (ch >= 123 && ch <= 126) || (ch >= 3623 && ch <= 3630)) {

        return 2; // return 'CONS'
    } else {

        // if not in the above range, then look up in classTable
        return classTable[ch];
    }

}

/*
    genClassTable()
    return : dict[ascii_code] = class, its ascii code as a key and its class as a value

    just to generate class lookup table for the sake of laziness
*/


function genClassTable() {

    var table = {

        // Mai ya mok
        3654: 1,

        // Thai consonant
        3621: 2,

        // Leading Vowel return 'LV'
        3648: 3, // เอ
        3649: 4, // แอ
        3650: 5, // โอ
        3651: 6, // ใอ
        3652: 6, // ไอ

        // Following vowels type 1 return 'FV1'
        3632: 7, // อะ
        3634: 8, // อา
        3635: 9, // อำ

        // Following vowels type 2 return 'FV2'
        3653: 10,

        // Following vowels type 3 return 'FV3' ทุกตัว ยกเว้น2ตัวเนี้ย
        3620: 11,
        3622: 11,

        // Below vowel type 1 return 'BV1' sara-u
        3640: 12,

        // Below vowel type 2 return 'BV2' sara-uu
        3641: 13,

        // BD(UNDERDOT) pinthu
        3642: 14,

        // TONE return 'TONE'
        3656: 15,
        3657: 15,
        3658: 15,
        3659: 15,

        // Above Diacritics type 1 return 'AD1' karant
        3660: 16,
        3661: 16,

        // Above Diacritics type 2 return 'AD2'
        3655: 17,

        // Above Diacritics type 3 return 'AD3'
        3662: 18,

        // Above Vowel type 1 return 'AV1'
        3636: 19,

        // Above Vowel type 2 return 'AV2'
        3633: 20,
        3638: 20,

        // Above Vowel type 3 return 'AV3'
        3637: 21,
        3639: 21
    };

    return table;
}

/*
    genCP()

    This function is implemented to generate CP table to be used with Nectec's method. I won't use it anyway,
    but I will just leave it here for my fellas

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

*/
