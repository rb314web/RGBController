class Rgb extends React.Component {
	state = {
		active: false,
		brightness: 100,
		color: '',
	};

	setBrighter() {
		this.setState({
			brightness:
				this.state.brightness < 100
					? this.state.brightness + 10
					: this.state.brightness,
		});
	}

	setDarker() {
		this.setState({
			brightness:
				this.state.brightness > 0
					? this.state.brightness - 10
					: this.state.brightness,
		});
	}

	setColor(e) {
		this.setState({
			color: e.target.value,
		});
	}

	toggle() {
		this.setState({
			active: !this.state.active,
		});
	}

	randomColor() {
		this.setState({
			color: Math.floor(Math.random() * 16777215).toString(16),
		});
	}

	render() {
		return (
			<div>
				<h1>Sterowanie RGB</h1>
				<div className='buttons'>
					<button onClick={this.setDarker.bind(this)}>Ciemniej</button>
					<button onClick={this.randomColor.bind(this)}>Losowy kolor</button>
					<button onClick={this.setBrighter.bind(this)}>Jaśniej</button>
					<button onClick={this.toggle.bind(this)}>
						{this.state.active ? 'Wyłącz' : 'Włącz'}
					</button>
				</div>
				<p>Aktualna jasność: {this.state.brightness}%</p>
				<p>Wybierz kolor</p>
				<input
					className='color'
					onChange={this.setColor.bind(this)}
					type='color'></input>
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Rgb />);
