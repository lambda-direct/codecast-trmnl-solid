import {
	Component,
	createEffect,
	createSignal,
	Show,
	on,
	onCleanup,
} from 'solid-js';
import styles from './TypingMode.module.scss';

const TypingMode: Component<{}> = () => {
	const [duration, setDuration] = createSignal(500);
	const [durationDropdownVisible, setDurationDropdownVisible] =
		createSignal(false);

	let textarea: HTMLDivElement = null!;
	let durationWrapper: HTMLDivElement = null!;

	const durations = [100, 200, 500, 1000];

	createEffect(
		on(durationDropdownVisible, (v) => {
			if (!v) return;

			function onClick(event: MouseEvent) {
				if (
					!(event.target instanceof Element) ||
					!durationWrapper.contains(event.target)
				) {
					setDurationDropdownVisible(false);
				}
			}

			window.addEventListener('click', onClick);
			onCleanup(() => window.removeEventListener('click', onClick));
		}),
	);

	return (
		<div class={styles['root']!}>
			<div class={styles['input-row']!}>
				<div class={styles['input']!} contentEditable={true} ref={textarea} />
				<div ref={durationWrapper} class={styles['duration-wrapper']!}>
					<button onClick={() => setDurationDropdownVisible((d) => !d)}>
						{duration()}ms
					</button>
					<Show when={durationDropdownVisible()}>
						<div class={styles['duration-dropdown']!}>
							{durations.map((d) => (
								<button
									class={styles['item']!}
									onClick={() => {
										setDuration(d);
										setDurationDropdownVisible(false);
									}}
								>
									{d}ms
								</button>
							))}
						</div>
					</Show>
				</div>
			</div>
		</div>
	);
};

export default TypingMode;
