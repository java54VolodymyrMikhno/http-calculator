import http from 'node:http';
import CalculatorService from './service/CalculatorServise.mjs';
import CalculatorView from './view/CalculatorView.mjs';
import { operations } from './config/operations.mjs';
import { parseUrl, handleOperands, handleUnsupportedMethod } from './helpers/requestHandler.mjs';

const server = http.createServer();
const PORT = 3500;
server.listen(PORT, () => {
    console.log(`Server is starting on port ${server.address().port}`);
});
new CalculatorService(server, operations);
const view = new CalculatorView();


server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const { operationType, operands } = parseUrl(req.url);
    if (!operations.has(operationType)) {
        return handleUnsupportedMethod(view, res, operationType);
    }
    if (!operands) {
        return handleOperands(view, res);
    }
    server.emit(operationType, operands, res);
});



