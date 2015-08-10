// just to gen CP table and locate where to Debug
var CPt = genCP();
var classTable = genClassTable();
var state = 'start';

// key sequence handler, use to get text from textfield then slice
// and pass to check class function
function ksHandler() {

    var dbug1 = document.getElementById("dbug1"),
        dbug2 = document.getElementById("dbug2"),
        dbug3 = document.getElementById("dbug3"),
        input = document.getElementById("input"),

    // get the fullText of Textfield id:input in index.html
        fullText = input.value,
        fullTextLength = fullText.length,

    // get all and the last key press
        all = fullText.slice(0, fullTextLength - 1),
        lastKey = fullText[fullTextLength - 1],

    // call the function then display
        retVal = keySequenceCheck(all, lastKey);

    input.value = retVal;

    dbug1.innerHTML = all;
    dbug2.innerHTML = lastKey;
    dbug3.innerHTML = retVal;
}

function keySequenceCheck(all, lastKey) {

    var lastKeyAscii = lastKey.charCodeAt(0),
        lastKeyClass = getClass(lastKeyAscii);
    /*
        Use state as a global state to keep track of where the hell you are then get into rach state by zClass
        As you can see from the FSM diagram from nectec, after CONS there can be 3 possibles state which i will
        call them C1 ( the joint of BV1, AV1), C2 (AD2,AD3,BD), C3 (AV3).
    */
    switch (state) {
        case 'start':
            switch (lastKeyClass) {

                case 'NON':
                    state = 'start';
                    break;

                case 'LV':
                    state = 'start';
                    break;

                case 'FV1':
                    state = 'start';
                    break;

                case 'FV2':
                    state = 'start';
                    break;

                case 'FV3':
                    state = 'start';
                    break;

                case 'CONS':
                    state = 'CONS';
                    break;

                default:
                    // not in the general case here, then reject and go back to start
                    state = 'start';
                    lastKey = '';
                    break;
            } break;

        case 'CONS':
            switch (lastKeyClass) {

                case 'BV1':
                    state = 'C1';
                    break;

                case 'AV1':
                    state = 'C1';
                    break;

                case 'AD2':
                    state = 'start';
                    break;

                case 'AD3':
                    state = 'start';
                    break;

                case 'BD':
                    state = 'start';
                    break;

                case 'BV2':
                    state = 'C2';
                    break;

                case 'AV2':
                    state = 'C2';
                    break;

                case 'AV3':
                    state = 'C3';
                    break;

                default:
                    if (lastKeyClass == 'CONS') {
                        state = 'CONS'
                    }else{
                      state = 'start';
                    }
                    break;
            }break;
        case 'C1':
            switch (lastKeyClass) {
                case 'TONE':
                    state = 'start'
                    break;

                case 'AD1':
                    state = 'start'
                    break;

                default:
                    if (lastKeyClass == 'CONS') {
                        state = 'CONS'
                    }else{
                      state = 'start';
                    }
                    break;
            } break;
        case 'C2':
            switch (lastKeyClass) {
                case 'TONE':
                    state = 'start'
                    break;

                default:
                    if (lastKeyClass == 'CONS') {
                        state = 'CONS'
                    }else{
                      state = 'start';
                    }
                    break;
            }break;
        case 'C3':
            switch (lastKeyClass) {
                case 'TONE':
                    state = 'start'
                    break;

                case 'AD2':
                    state = 'start'
                    break;

                default:
                    if (lastKeyClass == 'CONS') {
                        state = 'CONS'
                    }else{
                      state = 'start';
                    }
                    break;
            }break;
        default:
            z = '';
            break;
    }

    return all.concat(lastKey);
}

function klear() {
    document.getElementById("input").value = "";
    document.getElementById("dbug1").innerHTML = "";
    document.getElementById("dbug2").innerHTML = "";
    document.getElementById("dbug3").innerHTML = "";
    state = 'start';
}

function getClass(ch) {

    // check for control char and delete
    if ((ch >= 0 && ch <= 31) || ch === 127) {

        return 'CTRL'; // return 'CTRL';

        // check for all English alphabets, numeral, angkhakhu, fongnam,
        // khomut,maiyamok,baht sign
    } else if ((ch >= 65 && ch <= 122) || (ch >= 3663 && ch <= 3675) || ch == 32) {

        return 'NON'; // return 'NON';

        // check for all consonant Thai character
    } else if ((ch >= 3585 && ch <= 3619) || (ch >= 33 && ch <= 64) || (ch >= 91 && ch <= 96) || (ch >= 123 && ch <= 126) || (ch >= 3623 && ch <= 3630)) {

        return 'CONS'; // return 'CONS'
    } else {

        // if not in the above range, then look up in classTable
        return classTable[ch];
    }

}

function genClassTable() {

    var table = {

        // Mai ya mok
        3654: 'NON',

        // Thai consonant
        3621: 'CONS',

        // Leading Vowel return 'LV'
        3648: 'LV',
        3649: 'LV',
        3650: 'LV',
        3651: 'LV',
        3652: 'LV',

        // Following vowels type 1 return 'FV1'
        3632: 'FV1',
        3634: 'FV1',
        3635: 'FV1',

        // Following vowels type 2 return 'FV2'
        3653: 'FV2',

        // Following vowels type 3 return 'FV3' ทุกตัว ยกเว้น2ตัวเนี้ย
        3620: 'FV3',
        3622: 'FV3',

        // Below vowel type 1 return 'BV1' sara-u
        3640: 'BV1',

        // Below vowel type 2 return 'BV2' sara-uu
        3641: 'BV2',

        // BD(UNDERDOT) pinthu
        3642: 'BD',

        // TONE return 'TONE'
        3656: 'TONE',
        3657: 'TONE',
        3658: 'TONE',
        3659: 'TONE',

        // Above Diacritics type 1 return 'AD1' karant
        3660: 'AD1',
        3661: 'AD1',

        // Above Diacritics type 2 return 'AD2'
        3655: 'AD2',

        // Above Diacritics type 3 return 'AD3'
        3662: 'AD3',

        // Above Vowel type 1 return 'AV1'
        3636: 'AV1',

        // Above Vowel type 2 return 'AV2'
        3633: 'AV2',
        3638: 'AV2',

        // Above Vowel type 3 return 'AV3'
        3637: 'AV3',
        3639: 'AV3'
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
