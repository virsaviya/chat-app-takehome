import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import Options from '../../components/MessageOptions';
import Dialog from '../../components/Dialog';
import { Wrapper, MetaInfo, Username, Timestamp } from './styled';
import { convertSentAt } from '../../utils/sentAtManipulations';

const useStyles = makeStyles({
  rounded: {
    backgroundColor: "#4D7CDF",
    borderRadius: '4px',
    marginRight: '8px',
  },
});

function Message(props) {
  const { avatar, username, content, sentAt, deleteMessage } = props;
  const classes = useStyles();
  const [showOptions, toggleShowOptions] = useState(false);
  const [openDialog, toggleOpenDialog] = useState(false);
  const [dialogAction, setDialogAction] = useState(null);

  const handleOpenDialog = (action) => {
    toggleOpenDialog(true);
    setDialogAction(action);
  };

  const handleCloseDialog = (messageId, action) => {
    toggleOpenDialog(false);
    if (action === 'Delete') {
      deleteMessage(messageId);
    }
  }

  return (
    <Wrapper
      onMouseEnter={() => toggleShowOptions(true)}
      onMouseLeave={() => toggleShowOptions(false)}
    >
      <Dialog
        messageProps={props}
        open={openDialog}
        action={dialogAction}
        handleClose={handleCloseDialog}
      />
      {showOptions && <Options openDialog={handleOpenDialog} />}
      <Avatar alt={username} src={avatar} className={classes.rounded}/>
      <div>
        <MetaInfo>
          <Username>{username}</Username>
          <Timestamp>{convertSentAt(sentAt)}</Timestamp>
        </MetaInfo>
        <div>{content}</div>
      </div>
    </Wrapper>
  );
}

export default Message;
