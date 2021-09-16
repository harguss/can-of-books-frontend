import React from 'react';

export default class CreateBooks extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      title: elements.title.value,
      discription: elements.discription.value,

    }
    console.log('saving', formData);
    this.props.onSave(formData);
    }

render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="title" name="title" />
        <input placeholder="discription" name="discription" />
        <button type="submit">
          Save!
        </button>
      </form>
    )
  }
}