
const validator = {
	set(target, key, value) {
		if (target[key] !== value) {
			console.log(`The property ${key} has been updated with ${value}`);
			return Reflect.set(target, key, value);
		}
		else {
			console.log(`The property ${key} was already ${value}`);
			return true;
		}
	}
};

/**
 * Creates a store
 * @param {object} defaultValues 
 */
const useStore = (defaultValues = {}) => {
	return new Proxy(defaultValues, validator);
}

export default useStore;