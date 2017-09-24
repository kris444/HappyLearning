import * as React from 'react';
import { Button, Checkbox, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

export interface IProps {
    id: string;
    label: string;
}

export interface IState {
    value:string;
    textCount:number;
}

export default class TextInput extends React.Component<IProps, IState>{

    constructor(props: IProps, state: IState) {
        super(props);
        this.state = {
            value: '',
            textCount:0

        };
    }

    render() {
        return <FormGroup controlId="formControlsTextarea">
            <ControlLabel>{this.props.label}</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" 
            value={this.state.value} 
            onChange={this.onTextChange}/>
            <div>`Entered text is {this.state.textCount} of 500`</div>
        </FormGroup>
    }

    onTextChange(){
       
    }
}



//   <textarea class="form-control vresize" id="encJs"></textarea>