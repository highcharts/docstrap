/**
    @module plugins/optiontag
    @author Torstein Honsi
 */
'use strict';

exports.defineTags = function (dictionary) {
    dictionary.defineTag('option', {
        canHaveType: true,
        canHaveName: true,
        onTagged: function (doclet, tag) {
            //console.log('tag', tag);
            //console.log('doclet', doclet);
            doclet.kind = 'option';
            if (doclet.meta.code.id) {
                //console.log('@onTagged', doclet)
            }
        }
    });
};

exports.handlers = {
    /*symbolFound: function (e) {
        if (e.comment && e.comment.indexOf('@option') !== -1) {
            //console.log(e);
        }
    },*/
    newDoclet: function (e) {
        if (e.doclet.kind === 'option') {
            //console.log(e);
        }
    }
};
/*
exports.astNodeVisitor = {
    visitNode: function(node, e, parser, currentSourceName) {
        if (JSON.stringify(e).indexOf('global') !== -1) {
            //console.log('@visitNode', e)
        }
    }
};
*/