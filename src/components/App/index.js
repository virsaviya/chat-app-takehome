import React from 'react';
import moment from 'moment';

import Message from '../Message';
import { Wrapper, Logo } from './styled';
import mock_data from '../../assets/mock_data.json';
import logo from '../../assets/logo.svg';

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
            avatar={message.avatar}
            content={message.content}
            sentAt={moment().subtract(message.sentAt).calendar().toLowerCase()}
          />
        ))
      }
    </Wrapper>
  );
}

export default App;
