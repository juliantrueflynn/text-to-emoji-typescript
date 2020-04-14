import React from 'react';
import Button from '../Button';

type Props = {
  className?: string;
}

// TODO: Change this to a component for filters
function RevisionControls({ className }: Props) {
  return (
    <div className={className}>
      <Button>
        Undo
      </Button>
      <Button>
        Clear
      </Button>
    </div>
  );
};

export default RevisionControls;
