const postcss = require('postcss');
const fs =  require('fs');

/* eslint-disable quotes */
module.exports = postcss.plugin('postcss-extract-vars', function (opts) {
    opts = opts || {};
    const outputFile = opts.file;

    return function (css) {
        let outputCSS = `:root {`;
        css.walkRules(function (rule) {
            if (rule.selector === ':root') {
                rule.nodes.forEach(node => {
                    if (node.prop && node.value) {
                        outputCSS = `${outputCSS}
                            ${node.prop}: ${node.value};`;
                    }
                });
            }
        });
        outputCSS = `${outputCSS}
            }`;
        if (outputFile) {
            fs.writeFile(outputFile, outputCSS, (err) => {
                if (err) {
                    throw new Error(
                        `Could not write to file ${outputFile}: ${err}`
                    );
                }
            });
        }
    };

});
