
import config  from "../config/view.json" with {type: 'json'};;

export default class CalculatorView {
    getHtml(res, isError) {
        const style = `
                        font-size: ${config.fontSize};
                        display: block;
                        text-align: ${config.textAlign};
                        color: ${isError ? config.errorColor : config.resultColor};
                    `;

        return `<label style="${style}"> ${res} </label>`
    }
}