describe('Rob 1', function () {

    var L = rob.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = rob[index].word;
        var c = rob[index].correct;

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
            it(w + ' should be = ' + c, function () {
                //                console.log('c = ' +c);
                //                console.log('input.value = ' + inp);
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

describe('Lexitron#1', function () {

    var L = lexitron.length;
    var input = document.getElementById("input");

    for (var index = 0; index < L; index++) {
        var txt = '';
        input.value = '';

        var w = lexitron[index];
        var c = lexitron[index];

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
            it(w + ' should be = ' + c, function () {
                expect(inp).toEqual(c);
            });
        }
        checkval(w, c, input.value);
        klear();
    }
});

describe('TESTCASE#1', function () {

    var input_word = "ธนพง",
        correct_word = "ธนพง";

    it(input_word + ' should = ' + correct_word, function () {

        var length_of_input_word = input_word.length,
            HTML_input = document.getElementById("input"),
            // just a text builder
            text_builder = '';

        // clear the input of the HTML form
        HTML_input.value = '';

        // to compose each character to KeyboardEvent
        for (var each_character = 0; each_character < length_of_input_word; each_character += 1) {
            var keyboard_event = new KeyboardEvent("keyup", {
                bubbles: true,
                cancelable: true,
                char: input_word[each_character],
                key: input_word[each_character],
                shiftKey: true,
                keyCode: input_word[each_character].charCodeAt(0)
            });

            // build the text by adding each character into builder&form, then fire the event
            text_builder += input_word[each_character];
            HTML_input.value = text_builder;
            HTML_input.dispatchEvent(keyboard_event);
            text_builder = HTML_input.value;
        }

        // to check if the output in the HTMl form equals to what we expect
        expect(HTML_input.value).toEqual(correct_word);

        // clear the HTML_input value and state collected
        klear();
    });
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



function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
