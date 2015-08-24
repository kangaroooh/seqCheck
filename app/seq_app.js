// NOTE remember how to explain FSM and traceback
// FUTURE reformat code for readability
// TODO check state of ห้า+ี หี้

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
        z = lastKeyTxt,
        w = all[allLength - 3] || '',
        v = all[allLength - 4] || '',
        base = base.slice(0, base.length - 1);
        base = base.slice(0, base.length - 1);
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
        }
        break;
    case 11:
        switch (zClass) {
        case 10:
            state = 0;
            break;
        case 8:
            state = 0;
            break;
        default:
            checkAll = true;
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
            state = 216;
            break;
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
        }
        break;
        // C1 is here
    case 211:
        switch (zClass) {

        case 7:
        case 9:
            y = '';
            state = 2143;
            break;
        case 8:
            y = '';
            state = 2142;
            break;
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
        }
        break;
        // C2 is here
    case 212:
        switch (zClass) {

        case 7:
        case 9:
            y = '';
            state = 2143;
            break;
        case 8:
            y = '';
            state = 2142;
            break;

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
        case 16:
        case 17:
        case 18:
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
        // C3 is here
    case 213:
        switch (zClass) {
        case 7:
        case 9:
            y = '';
            state = 2143;
            break;
        case 8:
            y = '';
            state = 2142;
            break;

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
        case 16:
        case 17:
        case 18:
            y = '';
            state = 215;
            break;

        default:
            checkAll = true;
        }
        break;
        // C4 is here
    case 214: //
        switch (zClass) {
        case 13:
        case 12: // sara u
            y = [z, z = y][0];
            state = 2111;
            break;

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
        case 19:
        case 20:
        case 21:
            y = [z, z = y][0];
            state = 2111;
            break;
        default:
            checkAll = true;
        }
        break;
    case 215:
        // in case C1,C2,C3,C5 appear
        switch (zClass) {

        case 7:
        case 9:
            y = '';
            state = 2143;
            break;
        case 8:
            y = '';
            state = 2142;
            break;

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

        case 14:
        case 16:
        case 17:
        case 18:
            y = '';
            state = 215;
            break;
        case 15:
            y = '';
            state = 214;
            break;
        default:
            checkAll = true;
        }
        break;
    case 216:
        switch (zClass) {

        case 7:
        case 9:
            y = '';
            state = 2143;
            break;
        case 8:
            y = '';
            state = 2142;
            break;
        case 13:
        case 20:
            y = '';
            state = 212;
            break;
        case 21:
            y = '';
            state = 213;
            break;
        case 12:
        case 19:
            y = [z, z = y][0];
            state = 2111;
            break;

        case 15:
            y = '';
            state = 15;
            break;
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
        default:
            checkAll = true;
        }
        break;
    case 2111:
        switch (zClass) {

        case 7:
        case 9:
            if ((xClass == 12 || xClass == 13 || xClass == 14 || xClass == 19 || xClass == 20 || xClass == 21) && yClass == 15) {
                x = '';
                state = 2144;
            }
            break;
        case 8:
            if ((xClass == 12 || xClass == 13 || xClass == 14 || xClass == 19 || xClass == 20 || xClass == 21) && yClass == 15) {
                x = '';
                state = 2142;
            }
            break;

        case 12:
        case 13:
            if (yClass == 15 && ([12, 13, 19, 20, 21].indexOf(xClass) != -1)) {
                z = [x, x = z][0];
                z = '';
                state = 2111;
            }
            break;
        case 14:
        case 17:
        case 18:
            x = '';
            y = '';
            state = 215;
            break;
        case 16:
            if (xClass == 12 || xClass == 19) {
                y = '';
                state = 2111;
            } else {
                x = '';
                y = '';
                state = 216;
            }

            break;
        case 15:
            y = '';
            state = 2111;
            break;
        case 19:
        case 20:
        case 21:
            x = '';
            z = [y, y = z][0];
            state = 2111;
            break;
        default:
            checkAll = true;
        }
        break;
    case 2142:
        switch (zClass) {
        case 7:
            state = 2146;
            break;
        case 9:
            if (xClass == 15) { // with tone
                y = '';
                state = 2144;
            } else {
                y = '';
                state = 2143;
            }
            break;
        case 15:
            if (xClass == 15) { // with tone
                z = [x, x = z][0];
                z = '';
            } else {
                z = [y, y = z][0];
            }
            state = 2142;
            break;
        case 14:
        case 18:
        case 17:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 215;
            break;
        case 19:
            if (xClass == 15) { // if there exists TONE
                y = '';
                z = [x, x = z][0];
            } else {
                y = '';
            }
            state = 211;
            break;
        case 20:
            if (xClass == 15) { // if there exists TONE
                y = '';
                z = [x, x = z][0];
            } else {
                y = '';
            }
            state = 212;
            break;
        case 21:
            if (xClass == 15) { // if there exists TONE
                y = '';
                z = [x, x = z][0];
            } else {
                y = '';
            }
            state = 213;
            break;
        case 16:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 216;
            break;
        case 12: // u and uuuu
        case 13:
            if (xClass == 15) { // if there exists TONE
                y = '';
                z = [x, x = z][0];
                state = 2111;
            } else {
                z = [y, y = z][0];
                z = '';
                if (zClass == 12) {
                    state = 211;
                } else {
                    state = 212;
                }
            }
            break;
        default:
            checkAll = true;
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
        case 15:
            z = [y, y = z][0];
            state = 2144;
            break;
        case 14:
        case 18:
        case 17:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 215;
            break;
        case 19:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 211;
            break;
        case 20:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 212;
            break;
        case 21:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 213;
            break;
        case 16:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 216;
            break;
        case 12: // u and uuuu
        case 13:
            if (xClass == 15) { // if there exists TONE
                y = '';
                z = [x, x = z][0];
                state = 2111;
            } else {
                z = [y, y = z][0];
                z = '';
                if (zClass == 12) {
                    state = 211;
                } else {
                    state = 212;
                }
            }
            break;
        default:
            checkAll = true;
        }
        break;
    case 2144: // with tone
        switch (zClass) {
        case 7: //aa, aum
        case 9:
            y = '';
            state = 2144;
            break;
        case 8:
            y = '';
            state = 2142;
            break;
        case 15:
            z = [x, x = z][0];
            z = '';
            state = 2144;
            break;

        case 14:
        case 18:
        case 17:

            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 215;
            break;


            /*
                        case 15:
            if (wClass == 15) { // if tone present
                z = [w, w = z][0];
                z = '';
            } else {
                z = [y, y = z][0];
                x = [y, y = x][0];
            }
                */
        case 19:
            if (xClass == 15) { // if there exists TONE
                z = [x, x = z][0];
                y = '';
            } else {
                y = '';
            }
            state = 211;
            break;
        case 20:
            if (xClass == 15) { // if there exists TONE
                z = [x, x = z][0];
                y = '';
            } else {
                y = '';
            }
            state = 212;
            break;
        case 21:
            if (xClass == 15) { // if there exists TONE
                z = [x, x = z][0];
                y = '';
            } else {
                y = '';
            }
            state = 213;
            break;
        case 16:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 216;
            break;
        case 12: // u and uuuu
        case 13:
            if (xClass == 15) { // if there exists TONE
                y = '';
                z = [x, x = z][0];
                state = 2111;
            } else {
                z = [y, y = z][0];
                z = '';
                if (zClass == 12) {
                    state = 211;
                } else {
                    state = 212;
                }
            }
            break;
        default:
            checkAll = true;
        }
        break;
    case 2146: // อาะ
        switch (zClass) {
        case 15:
            if (wClass == 15) { // if tone present
                z = [w, w = z][0];
                z = '';
            } else {
                z = [y, y = z][0];
                x = [y, y = x][0];
            }
            state = 2146;
            break;
        default:
            checkAll = true;
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
            state = 36;
            break;
        case 8:
            state = 321;
            break;
        default:
            checkAll = true;
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
        }
        break;
    case 32:
        switch (zClass) {
        case 19:
        case 21:
            z = [y, y = z][0];
            state = 331;
            break;
        case 17:
            y = '';
            state = 35;
            break;
        case 7:
            state = 36;
            break;
        case 8:
            state = 321;
            break;
        default:
            checkAll = true;
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
        default:
            checkAll = true;
        }
        break;
    case 36:
        switch (zClass) {
        case 15:
            if (xClass == 15) {
                z = [x, x = z][0];
                z = '';
            } else {
                z = [y, y = z][0];
            }
            state = 321;
            break;
        case 17:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 35;
            break;
        case 19:
        case 21:
            if (xClass == 15) { // if there exists TONE
                z = [x, x = z][0];
                y = '';
                state = 331;
            } else {
                y = '';
                state = 33;
            }
            break;
        default:
            checkAll = true;
        }
        break;
    case 37:
        switch (zClass) {
        case 15:
            if (wClass == 15) { // if tone present
                z = [w, w = z][0];
                z = '';
            } else {
                z = [y, y = z][0];
                x = [y, y = x][0];
            }
            state = 37;
            break;
        default:
            checkAll = true;
        }
        break;
    case 321:
        switch (zClass) {
        case 7:
            state = 37;
            break;
        case 15:
            if (xClass == 15) {
                z = [x, x = z][0];
                z = '';
            } else {
                z = [y, y = z][0];
            }
            state = 321;
            break;
        case 17:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 35;
            break;
        case 19:
        case 21:
            if (xClass == 15) { // if there exists TONE
                z = [x, x = z][0];
                y = '';
                state = 331;
            } else {
                y = '';
                state = 33;
            }
            break;
        default:
            checkAll = true;
        }
        break;
    case 331:
        switch (zClass) {
        case 15:
            y = '';
            state = 331;
            break;
        case 17:
            x = '';
            y = '';
            state = 35;
            break;
        default:
            checkAll = true;
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
            state = 43;
            break;
        default:
            checkAll = true;
        }
        break;
    case 42:
        switch (zClass) {
        case 15:
            y = '';
            state = 42;
            break;
        case 17:
            y = '';
            state = 45;
            break;
        case 7:
            state = 43;
            break;
        default:
            checkAll = true;
        }
        break;
    case 43:
        switch (zClass) {
        case 15:
            if (xClass == 15) { // if there exists TONE
                z = [x, x = z][0];
                z = '';
            } else {
                z = [y, y = z][0];
            }
            state = 43;
            break;
        case 17:
            if (xClass == 15) { // if there exists TONE
                x = '';
                y = '';
            } else {
                y = '';
            }
            state = 45;
            break;
        default:
            checkAll = true;
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
        }
        break;
    case 51:
        switch (zClass) {
        case 15:
            state = 52;
            break;
        case 7:
            state = 53;
            break;

        case 14:
        case 17:
        case 18:
            x = '';
            state = 215;
            break;
        case 16:
            x = '';
            state = 216;
            break;
        case 9:
            x = '';
            state = 2143;
            break;
        case 8:
            x = '';
            state = 2142;
            break;
        case 19:
        case 12:
            x = '';
            state = 211;
            break;
        case 20:
        case 13:
            x = '';
            state = 212;
            break;

        case 21:
            x = '';
            state = 213;
            break;
        default:
            checkAll = true;
        }
        break;
    case 52:
        switch (zClass) {
        case 15:
            y = '';
            state = 52;
            break;
        case 7:
            state = 53;
            break;
        case 14:
        case 17:
        case 18:
            w = '';
            y = '';
            state = 215;
            break;
        case 16:
            w = '';
            y = '';
            state = 216;
            break;
        case 9:
            w = '';
            state = 2143;
            break;
        case 8:
            w = '';
            state = 2142;
            break;
        case 19:
        case 12:
            z = [y, y = z][0];
            w = '';
            state = 211;
            break;
        case 20:
        case 13:
            z = [y, y = z][0];
            w = '';
            state = 212;
            break;
        case 21:
            z = [y, y = z][0];
            w = '';
            state = 213;
            break;
        default:
            checkAll = true;
        }
        break;
    case 53: // correct model
        switch (zClass) {
        case 15:
            if (xClass == 15) {
                z = [x, x = z][0];
                z = '';
            } else {
                z = [y, y = z][0];
            }
            state = 53;
            break;
        case 14: // correct state
        case 17:
        case 18:
            if (xClass == 15) {
                v = '';
                y = '';
                x = '';
            } else {
                w = '';
                y = '';
            }
            state = 215;
            break;
        case 16:// correct state
            if (xClass == 15) {
                v = '';
                y = '';
                x = '';
            } else {
                w = '';
                y = '';
            }
            state = 216;
            break;
        case 7:
        case 9:
            if (xClass == 15) {
                v = '';
                y = '';
                state = 2144
            } else {
                y = '';
                w = '';
                state = 2143;
            }
            break;
        case 8:
            if (xClass == 15) {
                v = '';
                y = '';
            } else {
                y = '';
                w = '';
            }
                state = 2142;
            break;
        case 19:
        case 12:
            if (xClass == 15) {
                v = '';
                y = '';
                z = [x, x = z][0];
                state = 2111;
            } else {
                y = '';
                w = '';
                state = 212;
            }
            break;
        case 20:
        case 13:
            if (xClass == 15) {
                v = '';
                y = '';
                z = [x, x = z][0];
                state = 2111;
            } else {
                y = '';
                w = '';
                state = 213;
            }
            break;
        case 21:
            if (xClass == 15) {
                v = '';
                y = '';
                z = [x, x = z][0];
                state = 2111;
            } else {
                y = '';
                w = '';
                state = 213;
            }
            break;
        default:
            checkAll = true;
        }
        break;
    case 61:
        switch (zClass) {
        case 15:
            state = 62;
            break;
        case 14:
        case 17:
        case 18:
            x = '';
            state = 215;
            break;
        case 16:
            x = '';
            state = 216;
            break;
        case 7:
        case 9:
            x = '';
            state = 2143;
            break;
        case 8:
            x = '';
            state = 2142;
            break;
        case 19:
        case 12:
            x = '';
            state = 211;
            break;
        case 20:
        case 13:
            x = '';
            state = 212;
            break;
        case 21:
            x = '';
            state = 213;
            break;
        default:
            checkAll = true;
        }
        break;
    case 62:
        switch (zClass) {
        case 15:
            y = '';
            state = 62;
            break;
        case 14:
        case 17:
        case 18:
            w = '';
            y = '';
            state = 215;
            break;
        case 16:
            w = '';
            y = '';
            state = 216;
            break;
        case 7:
        case 9:
            w = '';
            state = 2144;
            break;
        case 8:
            w = '';
            state = 2142;
            break;
        case 19:
        case 12:
            z = [y, y = z][0];
            w = '';
            state = 2111;
            break;
        case 20:
        case 13:
            z = [y, y = z][0];
            w = '';
            state = 2111;
            break;
        case 21:
            z = [y, y = z][0];
            w = '';
            state = 2111;
            break;
        default:
            checkAll = true;
        }
        break;
    default:
        z = '';
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
        }
        checkAll = false;
    }
    return base.concat(v).concat(w).concat(x).concat(y).concat(z);
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
    base = fullText.slice(0, fullTextLength - 5),

        v = fullText[fullTextLength - 5],
        w = fullText[fullTextLength - 4],
        x = fullText[fullTextLength - 3],
        y = fullText[fullTextLength - 2],
        z = fullText[fullTextLength - 1];

    if (v != null) {
        var vClass = getClass(v.charCodeAt(0));

        console.log("wclass = " + vClass);
    }
    if (w != null) {
        var wClass = getClass(w.charCodeAt(0));

        console.log("wclass = " + wClass);
    }
    if (x != null) {
        var xClass = getClass(x.charCodeAt(0));

        console.log("xclass = " + xClass);
    }
    if (y != null) {
        var yClass = getClass(y.charCodeAt(0));

        console.log("yclass = " + yClass)
    }
    if (z != null) {
        var zClass = getClass(z.charCodeAt(0));

        console.log("zclass = " + zClass);
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
            state = 31;
            break;
        case 4:
            state = 41;
            break;
        case 5:
            state = 51;
            break;
        case 6:
            state = 61;
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
        if (yClass == 2) {
            if (xClass != 3 && xClass != 4 && xClass != 5 && xClass != 6) {
                state = 214;
                break;
            }
        } else if (yClass == 19 || yClass == 21) {
            if (wClass == 3) {
                state = 331;
                break;
            }
        } else if ([12, 19, 13, 20, 21].indexOf(yClass) != -1) {
            state = 2111;
            break;
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
            state = 62;
            break;
        default:
            state = 0;
        }
        break;

    case 7: // deals with sara -a
        switch (yClass) {
        case 15: // TONE
            switch (wClass) {
            case 5:
                state = 53;
                break;
            case 4:
                state = 43;
                break;
            case 3:
                state = 36;
                break;
            default:
                state = 2144;
            }
            break;
        case 2: // CONS
            switch (xClass) {
            case 5:
                state = 53;
                break;
            case 4:
                state = 43;
                break;
            case 3:
                state = 36;
                break;
            default:
                state = 2143;
            }
            break;
        case 8: // sara aa
            if (vClass == 3 || wClass == 3) {
                state = 37;
            } else {
                state = 2146;
            }

            break;
        }

        break;
    case 9: // sara -aum
        if (yClass == 15) {
            state = 2144;
        } else {
            state = 2143;
        }
        break;
        // deals with sara -aa
    case 8:
        if (wClass == 3 || xClass == 3) {
            if (zClass == 8) {
                state = 321;
            } else {
                state = 32;
            }

        } else {
            state = 2142;
        }
        break;
    case 16: // deals with karant
        if (yClass == 12 || yClass == 19) {
            state = 2111;
        } else {
            state = 216;
        }
        break;
    case 17:
        if (xClass == 3) {
            state = 35;
        } else if (xClass == 4) {
            state = 45;
        } else {
            state = 215
        }
        break;
    case 14:
    case 18:
        state = 215;
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
    if ((ch >= 65 && ch <= 122) || (ch >= 3663 && ch <= 3675)) {

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


        32: 1,
        3654: 1, // Mai ya mok
        3647: 1, // baht sign
        3631: 1, // "pai yal noi"


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
