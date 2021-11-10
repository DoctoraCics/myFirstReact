/*function Greet()
{
    return (
        <div>
            <h1>Hello Doctora</h1>
        </div>
    );
}
export default Greet;
*/

const Greet = (props) =>{
    return (
        <div>
            <h1>hello {props.name + "Doctora"} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    );
}
export default Greet; 
//const Greet = () => {} this is an arrow function