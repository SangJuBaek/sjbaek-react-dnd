import { memo } from 'react';
import { SourceBox } from 'SourceBox';
import { StatefulTargetBox as TargetBox } from 'TargetBox';
import { useSelector } from 'react-redux'
import { SourceItem } from 'types'
import { RootState } from 'store'

export const Container = memo(function Container() {
	const dummy = useSelector((state: RootState) => state.dragItem.dragItems)
	return (<div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
		<div style={{ float: 'left' }}>
			{dummy.map((sourceItem: SourceItem) => (<SourceBox key={sourceItem.id} {...sourceItem} />))}
		</div>

		<div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
			<TargetBox />
		</div>
	</div>);
});
