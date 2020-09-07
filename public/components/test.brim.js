import emit from "../../src/events/emit.js";
import useStore from "../../src/states/store.js";

let data = useStore({});

let props = useStore({
	title: "0"
});

const template = (props = {}) => /*html*/`
	<h1 id="test" @click="clicked">${props.title}</h1>
`;

export default {
	template,
	data,
	props,
	methods: {
		clicked() {
			console.log("clicked on title")
			emit("#test", "test");
		}
	}
};