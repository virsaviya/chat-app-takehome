import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import { Wrapper, MetaInfo, Username, Timestamp, Content } from './styled';

const useStyles = makeStyles({
  rounded: {
    backgroundColor: "#4D7CDF",
    borderRadius: '4px',
    marginRight: '8px',
  }
})

function Message({avatar, username, content, sentAt }) {
  const classes = useStyles();

  return (
    <Wrapper>
      <Avatar alt={username} src={avatar} className={classes.rounded}/>
      <div>
        <MetaInfo>
          <Username>{username}</Username>
          <Timestamp>{sentAt}</Timestamp>
        </MetaInfo>
        <Content>{content}</Content>
      </div>
    </Wrapper>
  );
}

export default Message;
