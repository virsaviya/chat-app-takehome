import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Message from '../Message';

function CustomDialog({ handleClose, open, action, messageProps }) {
  const deleteContent = (
    <div>
      <p>Are you sure you want to delete this message? This cannot be undone.</p>
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
        <DialogTitle>{action} message</DialogTitle>
        <DialogContent>
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
