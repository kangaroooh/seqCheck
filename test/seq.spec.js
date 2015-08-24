describe('Tip 11', function () {

    var L = set11.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set11[index].word;
        var c = set11[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            //            sleep(10);
            txt = input.value;
            //            console.log('inputVal = ' + input.value);
        }

        //        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                //                console.log('c = ' + c);
                //                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 12', function () {

    var L = set12.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set12[index].word;
        var c = set12[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            //            sleep(10);
            txt = input.value;
            //            console.log('inputVal = ' + input.value);
        }

        //        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                //                console.log('c = ' + c);
                //                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 13', function () {

    var L = set13.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set13[index].word;
        var c = set13[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            txt = input.value;
        }


        function checkval(w, c, inp) {
            it(w + " should be " + c, function () {
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 14', function () {

    var L = set14.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set14[index].word;
        var c = set14[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            //            sleep(10);
            txt = input.value;
            //            console.log('inputVal = ' + input.value);
        }

        //        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                //                console.log('c = ' + c);
                //                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 15', function () {

    var L = set15.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set15[index].word;
        var c = set15[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            //            sleep(10);
            txt = input.value;
            //            console.log('inputVal = ' + input.value);
        }

        //        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                //                console.log('c = ' + c);
                //                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 2', function () {

    var L = set2.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set2[index].word;
        var c = set2[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            //            sleep(10);
            txt = input.value;
            //            console.log('inputVal = ' + input.value);
        }

        //        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                //                console.log('c = ' + c);
                //                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 3', function () {

    var L = set3.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set3[index].word;
        var c = set3[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            txt = input.value;
        }


        function checkval(w, c, inp) {
            it(w + " should be " + c, function () {
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 4', function () {

    var L = set4.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set4[index].word;
        var c = set4[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            //            sleep(10);
            txt = input.value;
            //            console.log('inputVal = ' + input.value);
        }

        //        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                //                console.log('c = ' + c);
                //                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 5', function () {

    var L = set5.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set5[index].word;
        var c = set5[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            //            sleep(10);
            txt = input.value;
            //            console.log('inputVal = ' + input.value);
        }

        //        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                //                console.log('c = ' + c);
                //                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 6', function () {

    var L = set6.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set6[index].word;
        var c = set6[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            //            sleep(10);
            txt = input.value;
            //            console.log('inputVal = ' + input.value);
        }

        //        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                //                console.log('c = ' + c);
                //                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});
/*
describe('Tip 7', function () {

    var L = set7.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set7[index].word;
        var c = set7[index].correct;

        var wL = w.length;

        // for each character in word
        for (var each = 0; each < wL; each++) {
            var e = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: w[each],
                key: w[each],
                shiftKey: true,
                keyCode: w[each].charCodeAt(0)
            });
            txt += w[each];
            input.value = txt;
            input.dispatchEvent(e);
            //            sleep(10);
            txt = input.value;
            //            console.log('inputVal = ' + input.value);
        }

        //        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                //                console.log('c = ' + c);
                //                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});*/

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
