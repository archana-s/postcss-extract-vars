var postcss = require('postcss');
var fs = require('fs');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(() => {
            setTimeout(() => {
                const outputFile = opts.file;
                const expectedOutput =
                    fs.readFileSync(output, 'utf8').replace(/\s/, '');
                const outputData =
                    fs.readFileSync(outputFile, 'utf8').replace(/\s/, '');
                expect(outputData).toEqual(expectedOutput);
            }, 2000);
        });
}

it('generates a vars file with root variables', () => {
    return run(':root{ --color-red: red; --color-blue: blue; }',
        './tests/expectedOutput1.css',
        { file: './tests/output1.css' });
});

it('creates empty file for no vars', () => {
    return run('.colored {color: red; }',
        './tests/expectedOutput2.css',
        { file: './tests/output2.css' });
});

it('does not include variables not set in root scope', () => {
    return run(`:root {--color-red: red; --color-blue: blue;}.
        button { --color: red; }`,
    './tests/expectedOutput3.css',
    { file: './tests/output3.css' });
});

