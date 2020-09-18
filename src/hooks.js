import { EnzymeAdapter } from 'enzyme';
import  { useEffect, useRef, useState } from 'react';

export default function useHover() {
    const ref = useRef();
    const [ hovered, setHovered ] = useState(false);
    
    function enter() {
        setHovered(true);
    }
    
    function leave() {
        setHovered(false);
    }

    useEffect(() => {
        const refCopy = ref;
        refCopy.current?.addEventListener('mouseenter', enter)
        refCopy.current?.addEventListener('mouseleave', leave)
        return () => { }
     })

    return [ ref, hovered ];
}