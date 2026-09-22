const getSuccess = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
        message: 'This is a successful response',
    }));
    response.end();
};

const getBadRequest = (request, response) => {
    response.writeHead(400, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
        message: 'Missing valid query parameter set to true',
        id: 'badRequest',
    }));
    response.end();
};

const getBadRequestSuccess = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
        message: 'This request has the required parameters',
    }));
    response.end();
};

const getUnauthorized = (request, response) => {
    response.writeHead(401, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
        message: 'Missing loggedIn query parameter set to yes',
        id: 'unauthorized',
    }));
    response.end();
};

const getUnauthorizedSuccess = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
        message: 'You have successfully viewed the content.',
    }));
    response.end();
};

const getForbidden = (request, response) => {
    response.writeHead(403, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
        message: 'You do not have access to this content',
        id: 'forbidden',
    }));
    response.end();
};

const getInternal = (request, response) => {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
        message: 'Internal Server Error. Something went wrong.',
        id: 'internalError',
    }));
    response.end();
};

const getNotImplemented = (request, response) => {
    response.writeHead(501, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
        message: 'A get request for this page has not been implemented yet. Check again later for updated content',
        id: 'notImplemented',
    }));
    response.end();
};

const getNotFound = (request, response) => {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({
        message: 'The page you are looking for was not found.',
        id: 'notFound',
    }));
    response.end();
};

module.exports = {
    getSuccess,
    getBadRequest,
    getBadRequestSuccess,
    getUnauthorized,
    getUnauthorizedSuccess,
    getForbidden,
    getInternal,
    getNotImplemented,
    getNotFound,
};