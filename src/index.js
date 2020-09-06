import mount from './vdom/mount.js';
import render from './template/render.js';

import home from '../public/components/home.brim.js';

let vApp = render(home);
mount(vApp, "#app");

// setInterval(()=>{
// 	vApp = render(home);
// 	mount(vApp, "#app");
// }, 1000);