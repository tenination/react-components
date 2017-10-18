var App = () => (
  <div>
  	<h2>Grocery List</h2>
  	<GroceryList items={['eggs', 'milk', 'chocolate']} />
  </div>
);

var GroceryList = (props) => (
		<ul>
			{
				props.items.map(item => 
					<GroceryListItem item={item} />
			)}
		</ul>
);


class GroceryListItem extends React.Component {

	constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
    	done: false
    };
  }
  onItemClick() {
  	this.setState({
  		done: !this.state.done
  	});
  }
  render() {
  	var style = {
  		textDecoration: this.state.done ? 'line-through' : 'none',
  		color: this.state.done ? 'blue' : 'blank'
  	};
    return (
      <li style={style} onClick={this.onItemClick.bind(this)}>{this.props.item}</li> 
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

