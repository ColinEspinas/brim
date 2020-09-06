
/**
 * Get a component template from component
 * @param {object} component 
 * @param {object} props 
 */
export const from = (component, props = {}) => {
	return component.template(component.props = {...component.props, ...props});
}