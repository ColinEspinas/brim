
/**
 * Global DOMParser
 */
const parser = new DOMParser();

/**
 * Parse a component object to a DOM Tree
 * @param {object} component 
 */
const parse = (component) => {
	return parser.parseFromString(component.template(component.props), 'text/html').body.firstChild;
}

export default parse;