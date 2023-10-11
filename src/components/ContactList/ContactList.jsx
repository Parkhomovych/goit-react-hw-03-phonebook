import { Component } from 'react';
import { Btn, Item, List } from './ContactList.style';

export class ContactList extends Component {
  render() {
    const { list, filter, delCont } = this.props;
    return (
      <List>
        {list
          .filter(elem =>
            elem.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => (
            <Item key={item.id}>
              <p>
                {item.name}: {item.number}
              </p>
              <Btn onClick={() => delCont(item.id)} type="button">
                Delete
              </Btn>
            </Item>
          ))}
      </List>
    );
  }
}
