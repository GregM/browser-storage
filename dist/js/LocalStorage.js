"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var LocalStorage = (function () {
	function LocalStorage(options) {
		_classCallCheck(this, LocalStorage);

		this.key = options.key;
		this.value = options.value;
	}

	_prototypeProperties(LocalStorage, null, {
		get: {
			value: function get() {
				return window.localStorage.getItem(this.key);
			},
			writable: true,
			configurable: true
		},
		set: {
			value: function set() {
				return window.localStorage.setItem(this.key, this.value);
			},
			writable: true,
			configurable: true
		}
	});

	return LocalStorage;
})();

module.exports = LocalStorage;
//# sourceMappingURL=../js/LocalStorage.js.map