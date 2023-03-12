import { Component, createSignal } from 'solid-js';

type setter<T = any> = (param: T) => void;
type getter<T = any> = () => T | undefined;

function Queue<T>(items: T[] = []): [getter<T>, setter<T>] {
	return [() => items.splice(-1, 1)[0] ?? undefined, (value) => items.unshift(value)];
}

const App: Component = () => {
	const [popcolor, pushcolor] = Queue(['red', 'green', 'blue']);

	const [getBgColor, setBgColor] = createSignal('magenta');

	return (
		<>
			<h1
				style={{ ['background-color']: getBgColor() }}
				onclick={() => {
					const tmp = popcolor();
					if (!tmp) return;
					setBgColor(tmp);
					pushcolor(tmp);
				}}>
				Hello World!
			</h1>
			<button
				onclick={() => {
					pushcolor('gray');
				}}>
				push
			</button>
		</>
	);
};

export default App;
