// function myPageWasLoaded(){
//   console.log(`This method was fired`)
// }
// exports.myPageWasLoaded = myPageWasLoaded;


function myButton() {
  alert("Hello Word!");
}
exports.myButton = myButton;

import { createViewModel } from "./main-view-model";

export function onNavigatingTo(args) {
  const page = args.object;

  page.bindingContext = createViewModel();
}
