describe('Rob case', function () {

    var L = seto.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = seto[index].word;
        var c = seto[index].correct;

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
            console.log('inputVal = ' + input.value);
        }

        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                console.log('c = ' + c);
                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('Tip 1', function () {

    var L = set1.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = set1[index].word;
        var c = set1[index].correct;

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
            console.log('inputVal = ' + input.value);
        }

        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                console.log('c = ' + c);
                console.log('input.value = ' + inp);
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
            console.log('inputVal = ' + input.value);
        }

        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                console.log('c = ' + c);
                console.log('input.value = ' + inp);
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
            //            sleep(10);
            txt = input.value;
            console.log('inputVal = ' + input.value);
        }

        console.log('outside ' + input.value);

        function checkval(w, c, inp) {
            it(w + ' should be ' + c, function () {
                console.log('c = ' + c);
                console.log('input.value = ' + inp);
                expect(inp).toEqual(c);

            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
