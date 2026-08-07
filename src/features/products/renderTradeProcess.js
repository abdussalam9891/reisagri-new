import {
TRADE_PROCESS,
} from "../../constants/products.js";

import {
createTradeProcess,
} from "../../components/products/TradeProcess.js";

export function renderTradeProcess(){

const container=
document.getElementById(
"tradeProcessSection"
);

if(!container) return;

container.innerHTML=
createTradeProcess(
TRADE_PROCESS
);

window.lucide?.createIcons();

}
