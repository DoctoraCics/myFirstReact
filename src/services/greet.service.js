import httpCommon from "../commons/http-common"

const greetHello = () => {
    return httpCommon.get('/hello');
}
export default (greetHello);