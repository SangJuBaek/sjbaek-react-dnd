import React, { useMemo, memo, CSSProperties } from 'react';
import { useDrag } from 'react-dnd';
import { SourceItem } from 'types'
import { Button, StyleSheet, View } from 'react-native';

// import { Colors } from './Color';
const style: CSSProperties = {
    border: '1px dashed gray',
    padding: '0.5rem',
    margin: '0.5rem',
};

export const SourceBox = memo(function SourceBox(sourceItem: SourceItem) {
    const [{ isDragging }, drag] = useDrag(() => ({
        // type: color,
        // customType / 사용자마음대로 명명가능(controlType으로 사용)
        type: sourceItem.type,
        item: {
            id: sourceItem.id,
            text: sourceItem.text
        },
        // canDrag: !forbidDrag,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), []);
    // const onToggleForbidDrag = useCallback(() => { 
    //     setForbidDrag(!forbidDrag);
    // }, [forbidDrag, setForbidDrag]);
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
        cursor: 'move',
    }), [isDragging]);
    return (<div ref={drag} style={containerStyle} role="SourceBox">
			<input type="checkbox" />
			<small>{sourceItem.text}</small>
            <Button onPress={() => {}} title="Button" />
		</div>);
});
