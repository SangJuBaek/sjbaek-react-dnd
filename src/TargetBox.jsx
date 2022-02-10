import { useState, useCallback, memo } from 'react';
import { useDrop } from 'react-dnd';
import { Colors } from './Color';
const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};

const TargetBox = memo(function TargetBox({ itemArr, onDrop, lastDroppedColor, }) {
    const [{ isOver, draggingColor, canDrop }, drop] = useDrop(() => ({
        accept: ['test'],
        drop(_item, monitor) {
            onDrop(monitor.getItemType());
            return undefined;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType(),
        }),
    }), [onDrop]);
    const opacity = isOver ? 1 : 0.7;
    let backgroundColor = '#fff';
    switch (draggingColor) {
        case Colors.BLUE:
            backgroundColor = 'lightblue';
            break;
        case Colors.YELLOW:
            backgroundColor = 'lightgoldenrodyellow';
            break;
        default:
            break;
    }
    return (<div ref={drop} data-color={lastDroppedColor || 'none'} style={{ ...style, backgroundColor, opacity }} role="TargetBox">
			<p>Drop here.</p>

			{itemArr && itemArr.map((item, idx) => (<div key={`test${idx}`} style={{ border: '1px solid #8c8c8c', height: '30px', marginBottom: '10px' }}>{item.id}</div>))}
		</div>);
});
export const StatefulTargetBox = (props) => {
    const [itemArr, setItemArr] = useState([])
    const handleDrop = useCallback((type) => {
        setItemArr([...itemArr].concat(
            [
                {type,
                id: type + itemArr.length}
            ]
        ))
        // return setLastDroppedColor(color), []
    }, [itemArr]);
    return (<TargetBox {...props} itemArr={itemArr} onDrop={handleDrop}/>);
};
