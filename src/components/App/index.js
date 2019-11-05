import React, { useState } from 'react';

import Message from '../Message';
import Filters from '../Filters';
import { Wrapper, Logo } from './styled';
import mock_data from '../../assets/mock_data.json';
import logo from '../../assets/logo.svg';
import { convertSentAt, sortBySentAt } from '../../utils/sentAtManipulations';

function App() {
  const [sortByAsc, toggleSortByAsc] = useState(true);
  const messages = sortByAsc
    ? sortBySentAt(mock_data)
    : sortBySentAt(mock_data).reverse();

  return (
    <Wrapper>
      <Logo alt="modern health logo" src={logo} />
      <Filters sort={() => toggleSortByAsc(!sortByAsc)} />
      {
        messages.map((message) => (
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
