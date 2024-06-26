import React from 'react';

export interface PreloadProps {
  color: 'grey' | 'white' | 'black' | 'blue' | 'pink' | 'green' | 'red' | string;
}

const Preload = (props: PreloadProps) => {
  return (
    <div>
      <h1>Skeleton</h1>
    </div>
  );
};

export default Preload;