import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { Title } from './styled';

import Message from '../Message';

function CustomDialog({ handleClose, open, action, messageProps }) {
  const deleteContent = (
    <div>
      <div>Are you sure you want to delete this message? This cannot be undone.</div>
      <br />
      <Message {...messageProps} />
    </div>
  );
  const miscContent = <p>This feature is coming soon!</p>;

  return (
      <Dialog
        aria-labelledby={`overlayed dialog to ${action} message`}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <Title>{action} message</Title>
          { action === 'Delete' ? deleteContent : miscContent }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          { action === 'Delete' &&
            <Button onClick={() => handleClose(messageProps.id, 'Delete')} color="primary" autoFocus>
              {action}
            </Button>
          }
        </DialogActions>
      </Dialog>
  );
}

export default CustomDialog;
