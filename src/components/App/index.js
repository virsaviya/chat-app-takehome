import React from 'react';

import Message from '../Message';
import { Wrapper, Logo } from './styled';
import mock_data from '../../assets/mock_data.json';
import logo from '../../assets/logo.svg';
import { convertSentAt, sortBySentAt } from '../../utils/sentAtManipulations';

function App() {
  return (
    <Wrapper>
      <Logo alt="modern health logo" src={logo} />
      {
        mock_data.map((message) => (
          <Message
            key={message.uuid}
            senderId={message.senderUuid}
            username={message.senderUsername}
            avatar={message.senderAvatar}
            content={message.content}
            sentAt={convertSentAt(message.sentAt)}
          />
        ))
      }
    </Wrapper>
  );
}

export default App;
