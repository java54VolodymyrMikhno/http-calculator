 export function getOperands(urlTokens){
    const op1 = +urlTokens[2]
    const op2 = +urlTokens[3]
    if(!isNaN(op1) && !isNaN(op2)){
        return [op1,op2];
    }
}

export function parseUrl(url) {
    const urlTokens = url.split('/');
    const operationType = urlTokens[1];
    const operands = getOperands(urlTokens);
    return { operationType, operands };
}

export function handleUnsupportedMethod(view, res, operationType) {
    const html = view.getHtml(`Method ${operationType} unsupported`, true);
    res.end(html);
}

export function handleOperands(view, res) {
    const html = view.getHtml('Invalid operands', true);
    res.end(html);
}
