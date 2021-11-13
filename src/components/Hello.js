import { useEffect, useState } from "react";
import helloService from "../services/helloService";

const Hello = () => {
    //function hooks
    const [hello, setHello] = useState("walang api. Pasensiya na!")


    //hooks
    useEffect(() => {
        helloService.getHello() //promise
            .then(
                response => {
                    setHello(response.data);
                }
            )
            .catch(
                err => {
                    console.log("something went wrong")
                }
            )
    })
    return hello;
}
export default Hello;