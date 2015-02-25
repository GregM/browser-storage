"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var LocalStorage = _interopRequire(require("../js/LocalStorage"));

describe("local storage tests", function () {

	it("should create a new local storage object with only a key", function () {
		var a = new LocalStorage({ key: "123" });
		expect(a);
	});

	it("should create a new local storage object with only a value", function () {
		var a = new LocalStorage({ value: "123" });
		expect(a);
	});

	it("should create a new local storage object with both a key and a value", function () {
		var a = new LocalStorage({ key: "123", value: "456" });
		expect(a);
	});

	it("should get a local storage entry from key", function () {
		var a = new LocalStorage({ key: "123", value: "456" });
		a.get();
		expect(a);
	});

	it("should set a local storage entry from key and value", function () {
		var a = new LocalStorage({ key: "123", value: "456" });
		a.set();
		expect(a);
	});
});
//# sourceMappingURL=../spec/LocalStorageSpec.js.map