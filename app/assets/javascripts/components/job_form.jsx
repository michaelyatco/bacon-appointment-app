var JobForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  render: function() {
    return (
      <div>
        <h2>Post a new job</h2>
          <form>
            <input name='title' placeholder='Title'
              value={this.props.input_title}
              onChange={this.handleChange} />
            <input name='post_time' placeholder='Post Time'
              value={this.props.input_post_time}
              onChange={this.handleChange} />
            <input name='company' placeholder='Company'
              value={this.props.input_company}
              onChange={this.handleChange} />
            <input name='description' placeholder='Description'
              value={this.props.input_description}
              onChange={this.handleChange} />
            <input name='price' placeholder='Price $'
              value={this.props.input_price}
              onChange={this.handleChange} />
            <input type='submit' value='Post job' />
          </form>
      </div>
    )
  }
});
