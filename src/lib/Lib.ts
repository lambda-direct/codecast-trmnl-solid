export interface Config {
	color?: string;
}

export default class Lib {
	constructor(private el: Element, private config: Config = {}) {}

	public render() {
		this.el.innerHTML = `<div id='lib-root' style='width: 100px; height: 100px; background-color: ${
			this.config.color ?? 'blue'
		}'>Hello World!</div>`;
	}

	public setColor(color: string) {
		this.config.color = color;
		(this.el.querySelector('#lib-root') as HTMLElement).style.backgroundColor =
			color;
	}
}
