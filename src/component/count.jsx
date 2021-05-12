import React, { PureComponent } from 'react';

class Count extends PureComponent {
  render() {
    return (
      <div>
        <span className='title'>{this.props.name}</span>
        <span className="count">{this.props.count}</span>
        <button className="button-increment" onClick={this.props.onIcrease}>+</button>
      </div>
    );
  }
}

export default Count;