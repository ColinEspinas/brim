
/**
 * Emit an event to a target
 * @param {string} targetSelector 
 * @param {string} event 
 */
const emit = (targetSelector, event) => {
	const $targets = document.querySelectorAll(targetSelector);
	for (const $target of $targets) {
		$target.dispatchEvent(new Event(event));
	}
}

export default emit;