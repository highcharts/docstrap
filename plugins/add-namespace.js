/* eslint-env: node, es6 */
/**
    @module plugins/add-namespace
    @author Torstein Honsi
 */
'use strict';

exports.handlers = {
    /**
        Extend symbols with namespace which allows us to write short syntax
        like {Chart#redraw}, {@link Chart#redraw} or @lends Chart.prototype.
     */
    jsdocCommentFound: (e) => {
        
        const prefixes = [
            '{@link[\\s\\*]+',
            '@lends[\\s\\*]+',
            '@member[Oo]f[\\s]+',
            '@type[\\s]+',
            '{'
        ];
        const classes = [
            'Chart',
            'Series',
            'Point',
            'Axis',
            'Legend',
            'Tooltip',
            'SVGElement',
            'SVGRenderer'
        ]
        let regex = '(' + prefixes.join('|') + ')(' + classes.join('|') + ')';
        e.comment = e.comment
            .replace(new RegExp(regex, 'g'), '$1Highcharts.$2');
    }
};
