import http from 'node:http';
import CalculatorService from './service/CalculatorServise.mjs';
import CalculatorView from './view/CalculatorView.mjs';
import { operations } from './config/operations.mjs';
import { getOperands } from './helpers/requestHandler.mjs';

const server = http.createServer();
const PORT = 3500;
server.listen(PORT, () => {
  console.log(`Server is running on port ${server.address().port}`);
});
new CalculatorService(server, operations);
const view = new CalculatorView();


server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
 const urlTokens = req.url.split('/');
 let html;
 if(!operations.get(urlTokens[1])){
    html = view.getHtml(`method ${urlTokens[1]} unsupported`, true);
    res.end(html)
 }else{
    const operands =getOperands(urlTokens);
    if(!operands){
       html = view.getHtml(`wrong operands`, true);
       res.end(html)
    }else{
        server.emit(urlTokens[1], operands,res);
    }
 }
 
 
});
