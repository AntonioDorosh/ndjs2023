const {get} = require('https');
const {appendFile} = require('fs');

const getCfg = envVar => {
    if (envVar) {
        const cfg = {
            PRODUCTION: {
                api: 'https://jsonplaceholder.typicode.com/todos',
                fileName: 'todos.json',
            },
            DEV: {
                api: 'https://jsonplaceholder.typicode.com/albums',
                fileName: 'albums.json',
            }
        }
        return cfg[envVar];
    }
    return {
        api: 'https://jsonplaceholder.typicode.com/users',
        fileName: 'users.json',
    }
};

get(getCfg(process.env.NODE_ENV).api, ({on}) => {
    let data = '';

    on('data', (chunk) => {
        data += chunk;
    })
    let {fileName: nameFile} = getCfg(process.env.NODE_ENV);

    on('end', () => {
        appendFile(nameFile, data, (err) => {
            if (err) throw err;
        })
    }).on('error', (err) => {
        console.log(`Error: ${err.message}`)
    })
})
