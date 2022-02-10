import { useState, useCallback, useMemo, memo, } from 'react';
import { useDrag } from 'react-dnd';

// import { Colors } from './Color';
const style = {
    border: '1px dashed gray',
    padding: '0.5rem',
    margin: '0.5rem',
};

export const SourceBox = memo(function SourceBox({ children, }) {
    const [forbidDrag, setForbidDrag] = useState(false);
    const [{ isDragging }, drag] = useDrag(() => ({
        // type: color,
        // customType / 사용자마음대로 명명가능(controlType으로 사용)
        type: 'test',
        canDrag: !forbidDrag,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [forbidDrag]);
    const onToggleForbidDrag = useCallback(() => { 
        setForbidDrag(!forbidDrag);
    }, [forbidDrag, setForbidDrag]);
    // const backgroundColor = useMemo(() => {
    //     switch (color) {
    //         case Colors.YELLOW:
    //             return 'lightgoldenrodyellow';
    //         case Colors.BLUE:
    //             return 'lightblue';
    //         default:
    //             return 'lightgoldenrodyellow';
    //     }
    // }, [color]);
    const containerStyle = useMemo(() => ({
        ...style,
        // backgroundColor,
        opacity: isDragging ? 0.4 : 1,
        cursor: forbidDrag ? 'default' : 'move',
    }), [isDragging, forbidDrag]);
    return (<div ref={drag} style={containerStyle} role="SourceBox">
			<input type="checkbox" checked={forbidDrag} onChange={onToggleForbidDrag}/>
			<small>Forbid drag</small>
			{children}
		</div>);
});
