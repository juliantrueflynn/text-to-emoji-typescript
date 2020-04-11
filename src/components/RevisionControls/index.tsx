import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../configureStore';
import { undoRevision, clearRevision } from '../../actions';
import Button from '../Button';

function RevisionControls() {
  const dispatch = useDispatch()
  const isDisabled = useSelector<AppState, boolean>(state => !state.revisions.presentIndex)

  return (
    <>
      <Button onClick={() => dispatch(undoRevision())} disabled={isDisabled}>
        Undo
      </Button>
      <Button onClick={() => dispatch(clearRevision())} disabled={isDisabled}>
        Clear
      </Button>
    </>
  );
};

export default RevisionControls;
