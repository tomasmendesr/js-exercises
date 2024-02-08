function splitUrl(url) {
    const [urlPath, queryString] = url.split('?');
    const pathParts = urlPath.split('/');
    const queryParams = queryString ? queryString.split('&') : [];
    return { pathParts, queryParams };
}

function processPathParts(formatParts, pathParts) {
    const variables = {};

    formatParts.forEach((part, index) => {
        if (part.startsWith(':')) {
            const varName = part.slice(1);
            const value = pathParts[index];

            if (value === undefined || value === '') {
                console.error(`Error: Value not found for variable ${varName}`);
                process.exit(1); 
            }

            variables[varName] = isNaN(Number(value)) ? value : Number(value);
        }
    });

    return variables;
}

function processQueryParams(queryParams) {
    const variables = {};

    queryParams.forEach(param => {
        const [key, value] = param.split('=');

        if (!key || value === undefined || value === '') {
            console.error(`Error: Invalid query parameter: ${param}`);
            process.exit(1); 
        }

        variables[key] = isNaN(Number(value)) ? value : Number(value);
    });

    return variables;
}

function parseUrl(urlFormat, urlInstance) {
    const formatParts = urlFormat.split('/');
    const { pathParts, queryParams } = splitUrl(urlInstance);

    const pathVariables = processPathParts(formatParts, pathParts);
    const queryVariables = processQueryParams(queryParams);

    return { ...pathVariables, ...queryVariables };
}
  
// Example usage
console.log('1) Example usage')
const urlFormat = '/:version/api/:collection/:id';
const urlInstance = '/6/api/listings/3?sort=desc&limit=10';

console.log(`urlFormat: ${urlFormat}`)
console.log(`urlInstance: ${urlFormat}`)
console.log('invoking parseUrl(urlFormat, urlInstance)')
console.log(`result: ${JSON.stringify(parseUrl(urlFormat, urlInstance))}`);

console.log('\n2) Example usage')
const urlFormat2 = '/:version/api/:collection/:id';
const urlInstance2 = '/6/api/?sort=desc&limit=10';

console.log(`urlFormat2: ${urlFormat2}`)
console.log(`urlInstance2: ${urlInstance2}`)
console.log('invoking parseUrl(urlFormat2, urlInstance2)')
console.log(`result: ${JSON.stringify(parseUrl(urlFormat2, urlInstance2))}`);
