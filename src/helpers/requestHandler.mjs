import { operations } from "../config/operations.mjs";

export function getOperands(urlTokens) {
    const op1 = +urlTokens[2]
    const op2 = +urlTokens[3]
    if (!isNaN(op1) && !isNaN(op2)) {
        return [op1, op2];
    }
}

export function parseUrl(url) {
    const urlTokens = url.split('/');
    const operationType = urlTokens[1];
    const operands = getOperands(urlTokens);
    return { operationType, operands };
}

export function generateResponse(operationType, operands, view) {
    let response;
    if (operations.has(operationType)) {
        response = view.getHtml(`Method ${operationType} unsupported`, true);
    } else if (!operands) {
        response = view.getHtml(`Operands are not numbers`, true);
    }
    return response;
}
