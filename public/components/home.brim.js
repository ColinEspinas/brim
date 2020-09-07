import useStore from '../../src/states/store.js';
import emit from '../../src/events/emit.js';

import test from './test.brim.js';

let data = useStore({
	title: "Test",
	title2: "Hello",
});

let props = useStore({
	count: 0
});

const template = (props = {}) => /*html*/`
	<div id="app">
		<style>
			button {
				margin: 10px;
				display: block;
				font-family: 'Roboto', sans-serif;
				outline: none;
				position: relative;
				position: relative;
				border:none;
				padding: 15px;
				box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.3);
				background-color: #fefefe;
				border-radius: 5px;
				cursor: pointer;
				overflow: hidden;
				transition
			}
			button::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100px;
				height: 100px;
				transition: 600ms ease;
				background-image: linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%);
				border-radius: 50%;
				transform-origin: center;
				transform: scale(2);
			}

			button span {
				position: relative;
				color: #fefefe;
				transition: color 400ms ease;
			}

			button:hover::before {
				transform: translate(100%, 0) scale(0.1);
			}

			button:hover span {
				color: #52616b;
			}
		</style>
		<test :title=${data.title}></test>
		<button @click="countUp"><span>Count : ${props.count}</span></button>
	</div>
`;

export default {
	template,
	data,
	props,
	components: {
		test,
	},
	methods: {
		countUp() {
			this.props.count++;
		},
	}
};