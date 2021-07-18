
const Physics = require ('nativescript-physics-js')

exports.onLoaded = function(args){
    const page = args.object
    const container = page.getViewById('game')
    const meta = page.getViewById('meta')
}

const wold = Physics()
world.add(Physics.renderer('ns', {
  container: container,
  metaText: meta,
  meta: true
}))

setInterval(() => {
  wold.render()
}, 17);

// import { createViewModel } from "./main-view-model";

// export function onNavigatingTo(args) {
//   const page = args.object;

//   page.bindingContext = createViewModel();
// }
