/*
 * evil.js
 * http://github.com/kitgoncharov/evil.js
*/
(function (self) {
	var Math = self.Math,
	    isNaN = self.isNaN,
	    document = self.document,
	    write = document && document.write,
	    console = self.console,
	    search = self.location && self.location.search,
	    reverse = Array.prototype.reverse,
	    toUpperCase = String.prototype.toUpperCase;

	self.undefined = self.NaN = Infinity;
	self.alert = eval;
	self.prompt = self.confirm = self.open;
	
	self.isNaN = function (number) {
		return !(isFinite(number) || isNaN(number));
	};

	self.Math = {
		'ceil': function() {
			return 42;
		},
		'max': Math.min,
		'min': function() {
			return Infinity;
		},
		'pow': function() {
			return 'pow pow pow!';
		},
		'random': function() {
			return String.fromCharCode(~~(Math.random() * 1e3));
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
	
	Array.prototype.reverse = function() {
		var len = this.length,
		    item;
		while (len--) {
			item = this[len];
			if (typeof item == 'string') {
				this[len] = reverse.apply(item.split('')).join('');
			} else if (typeof item == 'number') {
				this[len] = item * Math.random();
			}
		}
		return reverse.apply(this);
	};

	Array.prototype.sort = function(fn) {
		return [4, 8, 15, 16, 23, 42];
	}

	String.prototype.toUpperCase = function() {
 		var shiftMap = {
			"`": "~",
			"1": "!",
			"2": "@",
			"3": "#",
			"4": "$",
			"5": "%",
			"6": "^",
			"7": "&",
			"8": "*",
			"9": "(",
			"-": "_",
			"=": "+",
			"[": "{",
			"]": "}",
			"\\": "|",
			";": ":",
			"'": '"',
			",": "<",
			".": ">",
			"/": "?"
 		},
 		strArr = toUpperCase.apply(this).split(''),
 		i = 0;

 		for (; i < strArr.length; i++) {
			if (shiftMap.hasOwnProperty(strArr[i])) {
				strArr[i] = shiftMap[strArr[i]];
			}
 		}

		return strArr.join('').replace(/[A-Z]/g, "$&\u0305");
	};
	
	self.JSON = {
		parse: function() {
			return Object.prototype;
		},
		stringify: function() {
			return Object.prototype.toString();
		}
	};
	
	self.XMLHttpRequest = function() {
		if (console && console.log) {
			console.log('Ajax is for losers.');
		}
		this.readyState = Infinity;
	};
	
	if (typeof search == 'string') {
		eval(decodeURIComponent(search.replace('?', '')));
	}
	
	if (document && write) {
		document.write = function() {
			var args = Array.prototype.slice.call(arguments);
			args.unshift(['<marquee>']);
			args.push(['</marquee>']);
			write.apply(document, args);
			write.apply(document, args);
		};
	}
	
}(this));
