var JobForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function() {
    return (
      <div>
        <h2>Post a new job</h2>
          <form onSubmit={this.handleSubmit}>
            <input name='title' placeholder='Title'
              value={this.props.title}
              onChange={this.handleChange} />
            <input name='post_time' placeholder='Post Time'
              value={this.props.post_time}
              onChange={this.handleChange} />
            <input name='company' placeholder='Company'
              value={this.props.company}
              onChange={this.handleChange} />
            <input name='description' placeholder='Description'
              value={this.props.description}
              onChange={this.handleChange} />
            <input name='price' placeholder='Price $'
              value={this.props.price}
              onChange={this.handleChange} />
            <input type='submit' value='Post job' />
          </form>
      </div>
    )
  }
});
