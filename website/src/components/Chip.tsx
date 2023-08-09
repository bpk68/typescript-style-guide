import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';

type ChipProps = {
  children?: string;
};

export const Chip = ({ children }: ChipProps) => {
  const [descriptionHeight, setDescriptionHeight] = useState<'auto' | 0>(0);

  return (
    <div className="mb-2">
      <div
        className="inline-flex items-center px-1.5"
        style={{
          backgroundColor: '#F0F0F0',
          color: '#6A6A6A',
          borderRadius: '8px',
          fontSize: '11px',
          fontWeight: 500,
          cursor: 'pointer',
          marginBottom: '2px',
        }}
        onClick={() => setDescriptionHeight((prev) => (prev === 0 ? 'auto' : 0))}
      >
        <div className="mr-1">Note</div>
        <InfoIcon />
      </div>
      <AnimateHeight duration={500} height={descriptionHeight}>
        <div
          style={{
            backgroundColor: '#474748',
            borderRadius: '6px',
            padding: '10px',
            borderLeft: '5px solid #d4d5d8',
            fontSize: '12px',
            fontStyle: 'italic',
          }}
        >
          {children}
        </div>
      </AnimateHeight>
    </div>
  );
};

const InfoIcon = () => (
  <svg fill="currentColor" viewBox="0 0 16 16" height="12px" width="12px">
    <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
);
