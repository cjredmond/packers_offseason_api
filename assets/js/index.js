var React = require('react')
var ReactDOM = require('react-dom')

var Hello = React.createClass ({
  render: function() {
    return (
      <div>
      <h1>One</h1>
      <h2>Two</h2>
      </div>

    )
  }
})

ReactDOM.render(<Hello />,
document.getElementById('container'))
