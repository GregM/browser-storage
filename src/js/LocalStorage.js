export default class LocalStorage {
		
	constructor(options) {
		this.key = options.key;
		this.value = options.value;
	}

	get() {
		return window.localStorage.getItem(this.key);
	}

	set() {
		return window.localStorage.setItem(this.key, this.value);
	}

}