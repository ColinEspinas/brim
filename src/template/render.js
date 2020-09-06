import parse from "./parse.js";
import assignEvents from "../events/assignEvents.js";

/**
 * Renders a component
 * @param {object} component
 * @return {ChildNode}
 */
const render = (component) => {

	let $tree = parse(component);

	if (component.components) {
		for (const [selector, comp] of Object.entries(component.components)) {

			let $nodes = $tree.querySelectorAll(selector);

			for (const $dummyNode of $nodes) {
	
				let compCopy = {...comp};
				let events = {};
	
				for (const attr of $dummyNode.attributes) {
					if (attr.name.includes("on:")) {
						events[(attr.name.substring(1).split(":")[1])] = attr.value;
					}
					else if (attr.name.startsWith(":")) {
						if (attr.value) compCopy.props[attr.name.substring(1)] = attr.value;
						else compCopy.props[attr.name.substring(1)] = true;
					}
				}

				let $node = render(compCopy);

				for (const attr of $node.attributes) {
					if (attr.name.startsWith(":")) {
						$node.removeAttribute(attr.name);
					}
				}

				for (const attr of $dummyNode.attributes) {
					if (!attr.name.startsWith(":")) {
						$node.setAttribute(attr.name, attr.value);
					}
				}

				if (component.methods) {
					for (const [name, callback] of Object.entries(events)) {
						if (component.methods[callback])
							$node.addEventListener(name, component.methods[callback].bind(component));
					}
				}

				$dummyNode.replaceWith($node);
			}
		}
	}

	assignEvents(component, $tree, true);

	return $tree;
}

export default render;