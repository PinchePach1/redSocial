const store = require('../../../store/dummy.js');
const { nanoid } = require('nanoid');
const auth = require('../auth')

const TABLA = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy.js');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function upsert(body) {
        const user = {
            name: body.name,
            userName: body.userName
        }

        if (body.id) {
            user.id = body.id;
        }else {
            user.id = nanoid();
        }

        if (body.password || body.userName) {
            await auth.upsert({
                id: user.id,
                userName: user.userName,
                password: body.password,
            })
        }

        return store.upsert(TABLA, user);
    }

    return {
        list,
        get,
        upsert,
    };
}