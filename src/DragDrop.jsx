import { memo } from 'react';
import { SourceBox } from './SourceBox';
import { StatefulTargetBox as TargetBox } from './TargetBox';
import { Colors } from './Color';

const dummy = [
	{
		id: 1,
		text: "test1"
	},
	{
		id: 2,
		text: "test2"
	},
	{
		id: 3,
		text: "test3"
	},
	{
		id: 4,
		text: "test4"
	},
	{
		id: 5,
		text: "test5"
	},
	{
		id: 6,
		text: "test6"
	},
	{
		id: 7,
		text: "test7"
	},
]

export const Container = memo(function Container() {
    return (<div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
			<div style={{ float: 'left' }}>
				{dummy.map((source) => (<SourceBox key={source.id} id={`t${source.id}`} text={source.text} />))}
			</div>

			<div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
				<TargetBox />
			</div>
		</div>);
});
