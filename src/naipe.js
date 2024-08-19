const db = [];
const nextI = 1;

const model = (body, id = nextId++) => {
    if (body.cor != undefined && body.nome != undefined && body.cor != '' && body.nome != '') {
        body.id = id;
        return body;
    }
};
