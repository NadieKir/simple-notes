import { useRef } from "react";

export const useScrollTo = (scrollOptions?: ScrollIntoViewOptions)  => {
  const elementToScrollTo = useRef<HTMLElement>(null);

  const onScroll = () => {
    if (elementToScrollTo.current) {
      elementToScrollTo.current.scrollIntoView(scrollOptions);
    }
  };

  return {
    elementToScrollTo,
    onScroll
  }
};