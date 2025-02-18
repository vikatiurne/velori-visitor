import { title } from 'process';
import { useRef, useEffect, useState, ReactNode } from 'react';

interface ScrollProps {
  children: ReactNode;
  header: ReactNode;
  footer?: ReactNode;
  title?: ReactNode;
  classWrap?: string;
  classContent?: string;
  width?: string;
  height?: string;
  disableScrollIndicator?: boolean;
}

const Scroll: React.FC<ScrollProps> = ({
  children,
  header,
  footer,
  title,
  classContent,
  classWrap,
  width = '100%',
  height = '100%',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [children]);

  return (
    <div
      ref={scrollContainerRef}
      style={{ height, width }}
      className="flex flex-col relative overflow-hidden"
    >
      <div className="flex-shrink-0">{header}</div>
      <div
        className={`flex-1 overflow-y-auto pr-1 ${classContent} scrollbar-hidden`}
      >
        <div className="flex-shrink-0">{title}</div>
        <div className={classWrap || 'flex flex-col'}>{children}</div>
      </div>
      <div className="flex-shrink-0">{footer}</div>
    </div>
  );
};

export default Scroll;
