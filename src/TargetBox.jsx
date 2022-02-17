import { useCallback, memo } from 'react';
import { useDrop } from 'react-dnd';
import Draggable from 'react-draggable';
import { useSelector, useDispatch } from 'react-redux'
import { addDraggedItem, setFocusItemId } from './store/dragItem'

const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};

const TargetBox = memo(function TargetBox({ itemObj, onDrop, lastDroppedColor, }) {
    const dispatch = useDispatch()
    const focusItemId = useSelector((state) => state.dragItem.focusItemId)
    useDrop(() => ({
        accept: ['type2'],
        drop(_item, monitor) {
            onDrop(monitor.getItemType(), _item);
            return undefined;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType(),
        }),
    }), [onDrop]);
    const handleClick = useCallback((id, e) => {
        dispatch(setFocusItemId(id))
    }, [dispatch])
    const style = {
        borderWidth: '1px',
        borderColor: '#8c8c8c',
        borderStyle: 'solid',
        width: '30px',
        height: '30px',
        marginBottom: '10px'
    }

    return (
    <Draggable grid={[25, 25]} bounds="parent"><div onClick={handleClick.bind(this, itemObj.id)} style={focusItemId === itemObj.id ? {...style, borderStyle: 'dashed'} : style}>{itemObj.text}</div></Draggable>);
});

export const StatefulTargetBox = (props) => {
    const dispatch = useDispatch()
    const draggedItems = useSelector((state) => state.dragItem.draggedItems)
    const handleDrop = useCallback((type, item) => {
        if (!draggedItems.some(_item => _item.id === item.id))
            dispatch(addDraggedItem(item))
    }, [dispatch, draggedItems]);
    const [, drop] = useDrop(() => ({
        accept: ['type1'],
        drop(_item, monitor) {
            handleDrop(monitor.getItemType(), _item);
            return undefined;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType(),
        }),
    }), [handleDrop]);
    return (<div ref={drop} data-color={'none'} style={{ ...style, position: 'relative', padding: '10px' }} role="TargetBox">
        {draggedItems.map(item => (<TargetBox {...props} itemObj={item} key={item.id} onDrop={handleDrop} />))}
        </div>
    );
};
