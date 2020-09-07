
/**
 * Assign event to node
 * @param {Object} component 
 * @param {Node} $node 
 * @param {Boolean} recursive 
 */
const assignEvents = (component, $node, recursive) => {
	
	let events = {};

	for (const attr of $node.attributes) {
		if (attr.name.startsWith("@")) {
			events[attr.name.substring(1)] = attr.value;
		}
	}

	if (component.methods) {
		for (const [name, callback] of Object.entries(events)) {
			if (component.methods[callback])
				$node.addEventListener(name, component.methods[callback].bind(component));
		}
	}

	if (recursive) {
		for(const $child of $node.children) {
			assignEvents(component, $child, true);
		}
	}
}

export default assignEvents;