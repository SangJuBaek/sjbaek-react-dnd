import { useCallback, memo, CSSProperties, MouseEvent } from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import Draggable from 'react-draggable';
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { addDraggedItem, setFocusItemId } from 'store/dragItem'
import { SourceItem, TargetItem, TargetBoxProp } from 'types'

const style: CSSProperties = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};

const TargetBox = memo(function TargetBox({ itemObj, onDrop }: TargetBoxProp) {
    const dispatch = useAppDispatch()
    const focusItemId = useSelector((state: RootState) => state.dragItem.focusItemId)
    useDrop(() => ({
        accept: ['type2'],
        drop(_item: SourceItem, monitor) {
            onDrop(monitor.getItemType(), _item);
            return undefined;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType(),
        }),
    }), [onDrop]);
    const handleClick = useCallback((id: string, e: MouseEvent) => {
        console.log(e)
        dispatch(setFocusItemId(id))
    }, [dispatch])
    const style: CSSProperties = {
        borderWidth: '1px',
        borderColor: '#8c8c8c',
        borderStyle: 'solid',
        width: '30px',
        height: '30px',
        marginBottom: '10px'
    }

    return (
    <Draggable grid={[25, 25]} bounds="parent"><div onClick={(e: MouseEvent) => handleClick(itemObj.id, e)} style={focusItemId === itemObj.id ? {...style, borderStyle: 'dashed'} : style}>{itemObj.text}</div></Draggable>);
});

export const StatefulTargetBox = () => {
    const dispatch = useAppDispatch()
    const draggedItems: TargetItem[] = useSelector((state: RootState) => state.dragItem.draggedItems)
    const handleDrop = useCallback((type, item: SourceItem) => {
        if (!draggedItems.some((_item: TargetItem) => _item.sourceId === item.id))
            dispatch(addDraggedItem(item))
    }, [dispatch, draggedItems]);
    const [, drop] = useDrop(() => ({
        accept: ['type1'],
        drop(_item: SourceItem, monitor: DropTargetMonitor) {
            handleDrop(monitor.getItemType(), _item);
            return undefined;
        },
        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggingColor: monitor.getItemType(),
        }),
    }), [handleDrop]);
    return (<div ref={drop} data-color={'none'} style={{ ...style, position: 'relative', padding: '10px' }} role="TargetBox">
        {draggedItems.map((item: TargetItem) => (<TargetBox itemObj={item} key={item.id} onDrop={handleDrop} />))}
        </div>
    );
};
