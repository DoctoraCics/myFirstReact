import React from "react"
class Button extends React.Component
{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    addCount = () => {
        //this.state.count = this.state.count + 1;
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }
    render(){
        return( 
            <div>
                 <p>Let's Go!!!</p>
                 <button onClick={this.addCount}>click this</button>
                 <p>counting = {this.state.count}</p>
                 <img src="https://cdn.donmai.us/sample/69/91/__rice_shower_gold_ship_agnes_tachyon_symboli_rudolf_grass_wonder_and_8_more_umamusume_and_1_more_drawn_by_seisei_tamago__sample-6991f58375ee6f1da502e2ea0b779c30.jpg"/>
                 <br></br>
            </div>
        )
    }
}
export default Button;
//<!--<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>-->