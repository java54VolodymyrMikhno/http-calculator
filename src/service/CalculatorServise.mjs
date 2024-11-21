import CalculatorView from "../view/CalculatorView.mjs";

const view = new CalculatorView()
export default class CalculatorService {
    constructor(emitter, operations) {
        operations.forEach((operation, operationType) => {
            emitter.addListener(operationType, (operands, res) => {
                const result = operation(operands[0], operands[1]);
                res.end(view.getHtml(result, false));
        });
        });
    }
}