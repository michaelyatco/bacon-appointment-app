var JobForm = React.createClass({
  render: function() {
    return (
      <div>
      <h2>Post a new job</h2>
        <form>
          <input name='title' placeholder='Title' />
          <input name='post_time' placeholder='Post Time' />
          <input name='company' placeholder='Company' />
          <input name='description' placeholder='Description' />
          <input name='price' placeholder='Price' />
          <input type='submit' value='Post job' />
        </form>
      </div>
    )
  }
});
