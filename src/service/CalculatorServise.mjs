import CalculatorView from "../view/CalculatorView.mjs";

const view = new CalculatorView()
export default class CalculatorService {
    constructor(emitter, operations) {
       emitter.addListener('add', (operands, res) => {
            const result = operations.get('add')(operands[0],operands[1]);
            res.end(view.getHtml(result,false));
        });
    }
}