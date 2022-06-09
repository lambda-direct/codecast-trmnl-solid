import { styled } from 'solid-styled-components';
import Form from '@/components/Form';
import Terminal from '@/components/Terminal';

function App() {
	return (
		<Root>
			<Form />
			<Terminal />
		</Root>
	);
}

const Root = styled('div')`
	background-color: #0a2540;
	height: 100%;
	display: flex;
	flex-flow: row nowrap;
	padding-top: 100px;
	justify-content: center;
	align-items: flex-start;
`;

export default App;
