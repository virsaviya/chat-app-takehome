import React, { useState } from 'react';

import Message from '../Message';
import Filters from '../Filters';
import LoadMore from '../LoadMore';
import { Wrapper, Logo } from './styled';
import mock_data from '../../assets/mock_data.json';
import logo from '../../assets/logo.svg';
import { sortBySentAt } from '../../utils/sentAtManipulations';

function App() {
  const [sortByAsc, toggleSortByAsc] = useState(false);
  const [pageCount, incPageCount] = useState(1);

  const messages = sortByAsc
    ? sortBySentAt(mock_data)
    : sortBySentAt(mock_data).reverse();
  const messagesToRender = messages.slice(0, pageCount * 20)

// normally, this would be done with a call to the backend,
// and the frontend would rerender accordingly
  const deleteMessage = (messageId) => {
    const messageIdx = messages.findIndex((message) => message.uuid === messageId);
    messagesToRender.splice(messageIdx, 1);
  }

  return (
    <Wrapper>
      <Logo alt="modern health logo" src={logo} />
      <Filters sort={() => toggleSortByAsc(!sortByAsc)} />
      {
        messagesToRender.map((message) => (
          <Message
            key={message.uuid}
            id={message.uuid}
            senderId={message.senderUuid}
            username={message.senderUsername}
            avatar={message.senderAvatar}
            content={message.content}
            sentAt={message.sentAt}
            deleteMessage={deleteMessage}
          />
        ))
      }
    <LoadMore load={() => incPageCount(pageCount + 1)} />
    </Wrapper>
  );
}

export default App;
