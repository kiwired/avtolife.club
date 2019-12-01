import { h, Component } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default class Calc extends Component {

	state = {
		selected: []
	}

	calc = () => {
		let price = 0;

		this.state.selected.forEach(v => price += ~~v.price);

		return price;
	}

	onInput = (opt) => {
		return (event) => {
			let { selected } = this.state;

			if (this.props.amount !== true) {
				selected = [];
			}

			const fined = this.state.selected.findIndex(v => v.value == opt.value);

			if (fined === -1) {
				selected[selected.length] = opt;
			} else {
				selected.splice(fined, 1);
			}

			this.setState({ selected });
		}
	}

	isChecked = (opt) => {
		return this.state.selected.findIndex(v => v.value == opt.value) !== -1;
	}

	componentDidMount() {
		this.setState({
			selected: [ this.props.options[0] ]
		});
	}

	render(props) {

		const options = props;

		return (
			<div className="calc">
				<Container>

					<div className="calc-wrap">
						<div className="calc-inner">

							{props.title && (
								<h2 className="calc-title">
									Стоимость <small>{props.title}</small>
								</h2>
							)}

							{props.text && (
								<div className="calc-desc">
									{props.text}
								</div>
							)}

							<div className="calc-select">
								{props.options.map((v, k) => (
									<label key={k}>
										<input type='checkbox' name='car' value={v.value} checked={this.isChecked(v)} onInput={this.onInput(v)} />
										<span>
											{v.label}
										</span>
									</label>
								))}
							</div>

							<div className="calc-price">
								от {this.calc()} ₽
							</div>

							<div className='calc-call'>
								<button type='button' class='button'>Заказать звонок</button>
							</div>

						</div>
					</div>

				</Container>
			</div>
		);
	}
}