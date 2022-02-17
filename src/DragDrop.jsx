import { memo } from 'react';
import { SourceBox } from './SourceBox';
import { StatefulTargetBox as TargetBox } from './TargetBox';
import { useSelector } from 'react-redux'

export const Container = memo(function Container() {
	const dummy = useSelector((state) => state.dragItem.dragItems)
	return (<div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
		<div style={{ float: 'left' }}>
			{dummy.map((source) => (<SourceBox key={source.id} sourceItem={source} id={source.id} text={source.text} />))}
		</div>

		<div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
			<TargetBox />
		</div>
	</div>);
});
