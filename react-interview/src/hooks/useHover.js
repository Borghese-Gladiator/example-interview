import { useState, useRef } from 'react'

// See: https://usehooks-ts.com/react-hook/use-event-listener
import useEventListener from './useEventListener'

function useHover() {
  const elementRef = useRef();
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  useEventListener('mouseenter', handleMouseEnter, elementRef)
  useEventListener('mouseleave', handleMouseLeave, elementRef)

  return [elementRef, isHovering];
}

export default useHover

/*
useHover #2

const useHover = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = React.useCallback(() => setIsHovering(true), []);
  const handleMouseOut = React.useCallback(() => setIsHovering(false), []);

  const nodeRef = React.useRef();

  const callbackRef = React.useCallback(
    node => {
      if (nodeRef.current) {
        nodeRef.current.removeEventListener('mouseover', handleMouseOver);
        nodeRef.current.removeEventListener('mouseout', handleMouseOut);
      }

      nodeRef.current = node;

      if (nodeRef.current) {
        nodeRef.current.addEventListener('mouseover', handleMouseOver);
        nodeRef.current.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, isHovering];
};
*/