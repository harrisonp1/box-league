/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface AddPlayerProps {
  showMe: boolean;
}

const AddPlayer: React.FC<AddPlayerProps> = ({ showMe }: AddPlayerProps) => {
  return (
    <div className="space-y-4">
      {/* Div that will expand or collapse */}
      <div
        css={css`
          height: ${showMe ? '3.5em' : '0'};
          overflow: hidden;
          transition: height 0.3s ease;
          background-color: lightblue;
        `}
        className="transition-all duration-300"
      >
        <p className="p-4">Add a player</p>
      </div>
    </div>
  );
};

export default AddPlayer;
