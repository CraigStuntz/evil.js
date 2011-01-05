/* Evil.js
 * http://kitgoncharov.github.com/evil.js
 *
 * Created by Kit Goncharov.
 * http://kitgoncharov.github.com
*/

(function () {
    var Math = this.Math,
	isNaN = this.isNaN,
	reverse = Array.prototype.reverse,
	toUpperCase = String.prototype.toUpperCase,
	hasOwnProperty = Object.prototype.hasOwnProperty,
	toString = Object.prototype.toString,
    alert = window.alert,
    confirm = window.confirm;

    shiftMap = {
        '`': '~',
        '1': '!',
        '2': '@',
        '3': '#',
        '4': '$',
        '5': '%',
        '6': '^',
        '7': '&',
        '8': '*',
        '9': '(',
        '-': '_',
        '=': '+',
        '[': '{',
        ']': '}',
        '\\': '|',
        ';': ':',
        '\'': '"',
        ',': '<',
        '.': '>',
        '/': '?'
    },

    upsideDownMap = {
        '\u0021': '\u00A1',
        '\u0022': '\u201E',
        '\u0026': '\u214B',
        '\u0027': '\u002C',
        '\u0028': '\u0029',
        '\u002E': '\u02D9',
        '\u0033': '\u0190',
        '\u0034': '\u152D',
        '\u0036': '\u0039',
        '\u0037': '\u2C62',
        '\u003B': '\u061B',
        '\u003C': '\u003E',
        '\u003F': '\u00BF',
        '\u0041': '\u2200',
        '\u0042': '\u10412',
        '\u0043': '\u2183',
        '\u0044': '\u25D6',
        '\u0045': '\u018E',
        '\u0046': '\u2132',
        '\u0047': '\u2141',
        '\u004A': '\u017F',
        '\u004B': '\u22CA',
        '\u004C': '\u2142',
        '\u004D': '\u0057',
        '\u004E': '\u1D0E',
        '\u0050': '\u0500',
        '\u0051': '\u038C',
        '\u0052': '\u1D1A',
        '\u0054': '\u22A5',
        '\u0055': '\u2229',
        '\u0056': '\u1D27',
        '\u0059': '\u2144',
        '\u005B': '\u005D',
        '\u005F': '\u203E',
        '\u0061': '\u0250',
        '\u0062': '\u0071',
        '\u0063': '\u0254',
        '\u0064': '\u0070',
        '\u0065': '\u01DD',
        '\u0066': '\u025F',
        '\u0067': '\u0183',
        '\u0068': '\u0265',
        '\u0069': '\u0131',
        '\u006A': '\u027E',
        '\u006B': '\u029E',
        '\u006C': '\u0283',
        '\u006D': '\u026F',
        '\u006E': '\u0075',
        '\u0072': '\u0279',
        '\u0074': '\u0287',
        '\u0076': '\u028C',
        '\u0077': '\u028D',
        '\u0079': '\u028E',
        '\u007B': '\u007D',
        '\u203F': '\u2040',
        '\u2045': '\u2046',
        '\u2234': '\u2235'
    };
    for (var c in upsideDownMap) {
        upsideDownMap[upsideDownMap[c]] = c;
    }

    upsideDown = function (message) {
        var len = message.length;
        var ud = new Array(len);
        for (var i = len - 1; i >= 0; --i) {
            var c = message.charAt(i);
            var r = upsideDownMap[c];
            ud[len - i - 1] = r || c;
        }
        return ud.join('');
    };

    this.alert = function (message) {
        alert(upsideDown(message));
    };

    this.confirm = function (message) {
        return confirm(upsideDown(message));
    };

    this.undefined = this.NaN = Infinity;

    this.isNaN = function (value) {
        return !(isFinite(value) || isNaN(value));
    };

    this.Math = {
        'ceil': function () {
            return 42;
        },
        'max': Math.min,
        'min': function () {
            return Infinity;
        },
        'pow': function () {
            return 'pow pow pow!';
        },
        'random': function () {
            return String.fromCharCode(~ ~(Math.random() * 1e3));
        },
        'round': Math.sqrt,
        'SQRT2': Math.SQRT1_2,
        'SQRT1_2': Math.LOG2E,
        'LOG2E': Math.LN10,
        'LN10': Math.LN2,
        'LN2': Math.E,
        'E': Math.PI,
        'PI': 3.2
    };

    Array.prototype.reverse = function () {
        var len = this.length, item;
        while (len--) {
            item = this[len];
            this[len] = typeof item === 'string' ? reverse.apply(
				item.split('')).join('') : (item * Math.random());
        }
        return reverse.apply(this);
    };

    Array.prototype.sort = function () {
        return [4, 8, 15, 16, 23, 42];
    };

    String.prototype.toUpperCase = function () {
        var strArr = toUpperCase.call(this).split(''), i = 0;
        for (; i < strArr.length; i++) {
            if (hasOwnProperty.call(shiftMap, strArr[i])) {
                strArr[i] = shiftMap[strArr[i]];
            }
        }
        return strArr.join('').replace(/[A-Z]/g, "$&\u0305");
    };

    this.JSON = {
        'parse': function () {
            return Object.prototype;
        },
        'stringify': function () {
            return toString();
        }
    };
}).call(this);