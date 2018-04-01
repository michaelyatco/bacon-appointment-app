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

  setJobTime: function(e) {
    var name = 'post_time';
    var obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  render: function() {
    var inputProps = {
      name: 'post_time'
    };

    return (
      <div>
        <h2>Post a new job</h2>
          <form onSubmit={this.handleSubmit}>
            <input name='title' placeholder='Title'
              value={this.props.input_title}
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
            <Datetime input={false} open={true} inputProps={inputProps}
              value={this.props.post_time}
              onChange={this.setJobTime} />
            <input type='submit' value='Post job' className='submit-button' />

          </form>
      </div>
    )
  }
});
