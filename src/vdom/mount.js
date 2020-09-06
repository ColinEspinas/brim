
/**
 * Mount a DOM node to an existing DOM node
 * @param {Node} $node 
 * @param {String} targetSelector
 */
const mount = ($node, targetSelector) => {
	document.querySelector(targetSelector).replaceWith($node);
	return $node;
};

export default mount;