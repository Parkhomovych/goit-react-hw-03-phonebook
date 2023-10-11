import { Component } from 'react';
import { Input, Paragraf } from './Filter.style';

export class Filter extends Component {
  render() {
    return (
      <>
        <Paragraf>Findcontact by name</Paragraf>
        <Input
          onChange={this.props.handlerFilter}
          type="text"
          name="filter"
        ></Input>
      </>
    );
  }
}
