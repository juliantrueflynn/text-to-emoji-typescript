import React from 'react';
import { connect } from 'react-redux';
import { undoRevision } from '../../actions';
import Button from '../Button';

interface IProps {
  undoRevision: typeof undoRevision;
}

function RevisionControls({ undoRevision }: IProps) {
  return (
    <>
      <Button onClick={undoRevision}>
        Undo
      </Button>
      <Button>
        Clear
      </Button>
    </>
  );
};

export default connect(null, { undoRevision })(RevisionControls);
