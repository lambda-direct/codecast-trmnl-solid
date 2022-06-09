import { Component, ParentComponent, createSignal, Show } from 'solid-js';

import styles from './Form.module.scss';
import TypingMode from './TypingMode';

const Form: Component<{}> = () => {
	const [mode, setMode] = createSignal<'input' | 'output' | 'frames'>('input');

	return (
		<div class={styles['root']!}>
			<div class={styles['tabs']!}>
				<Tab active={mode() === 'input'} onClick={() => setMode('input')}>
					Typing
				</Tab>
				<Tab active={mode() === 'output'} onClick={() => setMode('output')}>
					Output
				</Tab>
				<Tab active={mode() === 'frames'} onClick={() => setMode('frames')}>
					Frames
				</Tab>
			</div>
			<Show when={mode() === 'input'}>
				<TypingMode />
			</Show>
		</div>
	);
};

const Tab: ParentComponent<{
	active: boolean;
	onClick: () => void;
}> = (props) => {
	return (
		<div
			class={styles['tab']!}
			classList={{ [styles['active']!]: props.active }}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	);
};

export default Form;
