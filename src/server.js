const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');
const xmlHandler = require('./xmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);

    const url = new URL(request.url, `http://${request.headers.host}`);

    switch (url.pathname) {
        case '/':
            htmlHandler.getIndex(request, response);
            break;

        case '/style.css':
            htmlHandler.getCSS(request, response);
            break;

        case '/success':
            if (request.headers.accept === 'text/xml') {
                xmlHandler.getSuccess(request, response);
            } else {
                jsonHandler.getSuccess(request, response);
            }
            break;

        case '/badRequest':
            if (url.searchParams.get('valid') === 'true') {
                if (request.headers.accept === 'text/xml') {
                    xmlHandler.getBadRequestSuccess(request, response);
                } else {
                    jsonHandler.getBadRequestSuccess(request, response);
                }
            } else if (request.headers.accept === 'text/xml') {
                xmlHandler.getBadRequest(request, response);
            } else {
                jsonHandler.getBadRequest(request, response);
            }
            break;

        case '/unauthorized':
            if (url.searchParams.get('loggedIn') === 'yes') {
                if (request.headers.accept === 'text/xml') {
                    xmlHandler.getUnauthorizedSuccess(request, response);
                } else {
                    jsonHandler.getUnauthorizedSuccess(request, response);
                }
            } else if (request.headers.accept === 'text/xml') {
                xmlHandler.getUnauthorized(request, response);
            } else {
                jsonHandler.getUnauthorized(request, response);
            }
            break;

        case '/forbidden':
            if (request.headers.accept === 'text/xml') {
                xmlHandler.getForbidden(request, response);
            } else {
                jsonHandler.getForbidden(request, response);
            }
            break;

        case '/internal':
            if (request.headers.accept === 'text/xml') {
                xmlHandler.getInternal(request, response);
            } else {
                jsonHandler.getInternal(request, response);
            }
            break;

        case '/notImplemented':
            if (request.headers.accept === 'text/xml') {
                xmlHandler.getNotImplemented(request, response);
            } else {
                jsonHandler.getNotImplemented(request, response);
            }
            break;

        default:
            if (request.headers.accept === 'text/xml') {
                xmlHandler.getNotFound(request, response);
            } else {
                jsonHandler.getNotFound(request, response);
            }
            break;
    }
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});