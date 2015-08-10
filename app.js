// just to gen CP table and locate where to Debug
var CPt = genCP();
var classTable = genClassTable();
var state = 0;
var backup_state = 0;

// key sequence handler, use to get text from textfield then slice
// and pass to check class function
function ksHandler(event) {

  var dbug1 = document.getElementById("dbug1"),
  dbug2 = document.getElementById("dbug2"),
  dbug3 = document.getElementById("dbug3"),
  input = document.getElementById("input"),

  // get the fullText of Textfield id:input in index.html
  fullText = input.value,
  fullTextLength = fullText.length,

  // get all and the last key press
  all = fullText.slice(0, fullTextLength - 1),
  lastKeyTxt = fullText[fullTextLength - 1],
  lastKeyCode = event.keyCode || event.charCode;

  if (lastKeyCode === 8) {
    retVal = keySequenceCheck(fullText, true);
  } else {
    retVal = keySequenceCheck(fullText, false);
  }

  // display data
  input.value = retVal;

  dbug1.innerHTML = all;
  dbug2.innerHTML = lastKeyTxt;
  dbug3.innerHTML = retVal;
}

/*
keySequenceCheck
argument : all, lastKey
all is a String containing all data except the last one

return : a String which is all.concat(lastKey)
*/
function keySequenceCheck(fullText, bsCheck) {

  if (bsCheck){
    state = getCurrentState(fullText);
  }

  backup_state = state;

  var fullTextLength = fullText.length,

  all = fullText.slice(0, fullTextLength - 1),
  lastKeyTxt = fullText[fullTextLength - 1],

  lastKeyAscii = lastKeyTxt.charCodeAt(0),
  lastKeyClass = getClass(lastKeyAscii),

  checkAll = false;
  /*
  Use state as a global state to keep track of where the you are then get into rach state by lastKeyClass
  As you can see from the FSM diagram from nectec, after CONS there can be 3 possibles state which i will
  call them C1 ( the joint of BV1, AV1), C2 (AD2,AD3,BD), C3 (AV3).
  */
  switch (state) {
    case 0:
    switch (lastKeyClass) {

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
      // not in the general case here, then reject and go back to start
      state = 0;
      lastKeyTxt = '';
      break;
    } break;
    case 11:
    switch (lastKeyClass) {
      case 10:
      state = 0;
      break;

      default:
      checkAll = true;
    }break;

    case 3:
    switch (lastKeyClass) {
      case 2:
      state = 31;
      break;

      default:
      lastKeyTxt = '';
      break;
    } break;

    case 4:
    switch (lastKeyClass) {
      case 2:
      state = 41;
      break;

      default:
      lastKeyTxt = '';
      break;
    } break;

    case 5:
    switch (lastKeyClass) {
      case 2:
      state = 51;
      break;

      default:
      lastKeyTxt = '';
      break;
    } break;

    case 6:
    switch (lastKeyClass) {
      case 2:
      state = 61;
      break;

      default:
      lastKeyTxt = '';
      break;
    } break;

    case 2:
    switch (lastKeyClass) {

      case 12:
      state = 211;
      break;

      case 19:
      state = 211;
      break;

      case 17:
      state = 0;
      break;

      case 18:
      state = 0;
      break;

      case 14:
      state = 0;
      break;

      case 13:
      state = 212;
      break;

      case 20:
      state = 212;
      break;

      case 21:
      state = 213;
      break;

      case 15:
      state = 214;
      break;

      default:
      checkAll = true;
      break;
    }break;
    case 211:
    switch (lastKeyClass) {
      case 15:
      state = 0;
      break;

      case 16:
      state = 0;
      break;

      default:
      checkAll = true;
      break;
    } break;
    case 212:
    switch (lastKeyClass) {
      case 15:
      state = 0
      break;

      default:
      checkAll = true;
      break;
    }break;
    case 213:
    switch (lastKeyClass) {
      case 15:
      state = 0
      break;

      default:
      checkAll = true;
      break;
    }break;
    case 214:
    switch (lastKeyClass) {
      case 7: // sara a
      state = 0;
      break;

      case 8: // sara aa
      state = 2142;
      break;

      case 9: // sara aum
      state = 0;
      break;

      default:
      checkAll = true;
      break;
    }break;
    case 2142:
    switch (lastKeyClass) {
      case 7:
      state = 0;
      break;

      default:
      checkAll = true;
      break;
    }break;

    case 31:
    switch(lastKeyClass){
      case 19:
      state = 33;
      break;

      case 21:
      state = 33;
      break;

      case 17:
      state = 0;
      break;

      case 15:
      state = 32;
      break;

      default:
      checkAll = true;
      break;
    }break;

    case 33:
    switch (lastKeyClass) {
      case 15:
      state = 0;
      break;

      default:
      checkAll = true;
      break;
    } break;

    case 32:
    switch (lastKeyClass) {
      case 7:
      state = 0;
      break;

      case 8:
      state = 0;
      break;

      default:
      checkAll = true;
      break;
    } break;

    case 41:
    switch (lastKeyClass) {
      case 17:
      state = 0;
      break;

      case 15:
      state = 42;
      break;

      default:
      checkAll = true;
      break;
    } break;

    case 42:
    switch (lastKeyClass) {
      case 7:
      state = 0;
      break;

      default:
      checkAll = true;
      break;
    } break;

    case 51:
    switch (lastKeyClass) {

      case 15:
      state = 52;
      break;

      default:
      checkAll = true;
      break;
    } break;

    case 52:
    switch (lastKeyClass) {
      case 7:
      state = 0;
      break;

      default:
      checkAll = true;
      break;
    } break;

    case 61:
    switch (lastKeyClass) {

      case 15:
      state = 0;
      break;

      default:
      checkAll = true;
      break;
    } break;

    default:
    z = '';
    break;
  }

  // one last check to check dotted
  if (checkAll) {
    switch (lastKeyClass) {

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
      // not in the general case here, then reject and go back to start
      state = backup_state;
      lastKeyTxt = '';
      break;
    }
    checkAll = false;
  }

  return all.concat(lastKeyTxt);
}

function getCurrentState(fullText) {

  var fullTextLength = fullText.length,
  base = fullText.slice(0, fullTextLength - 2),
  y = fullText[fullTextLength - 2],
  z = fullText[fullTextLength - 1];

  switch (z) {
    case 'AD1':
    state = 'C1';
    break;
    case 'AD3':
    state = 'CONS';
    break;
    case 'BD':
    state = 'CONS';
    break;
    case 'BV2':
    state = 'CONS';
    break;

    case 'AD2':
    if (y === 'CONS') {
      state = 'CONS';
    } else if (y === 'AV3') {
      state = 'C3'
    } break;

    case 'TONE':
    switch (y) {
      case 'BV1':
      state = 'C1';
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
    } break;

  }
  return state;
}

function klear() {
  document.getElementById("input").value = "";
  document.getElementById("dbug1").innerHTML = "";
  document.getElementById("dbug2").innerHTML = "";
  document.getElementById("dbug3").innerHTML = "";
  state = 'start';
}

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
