import {
  RICE,
} from "../../constants/products.js";

import {
  createRiceSection,
} from "../../components/products/RiceSection.js";

export function renderRice(){

const container=
document.getElementById(
"riceSection"
);

if(!container) return;

container.innerHTML=
createRiceSection(
RICE
);

}
