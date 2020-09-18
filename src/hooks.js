import { EnzymeAdapter } from 'enzyme';
import  { useEffect, useRef, useState } from 'react';

export default function useHover() {
    const ref = useRef();
    const [ hovered, setHovered ] = useState(false);
    
    function enter() {
        setHovered(true);
    }

    useEffect(() => {
        const refCopy = ref;
        ref.current.addEventListener('mouseenter', enter)
        refCopy.current.addEventListener('mouseleave', () => {})
        return () => {}
     })

    return [ ref, hovered ];
}