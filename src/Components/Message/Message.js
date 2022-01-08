import React from "react";
import styled from "styled-components";

function Message({ message }) {
  return (
    <Wrapper>
      <div className="client_info">
        <h4 className="name">{message.fullName}</h4>
        <p className="phone">{message.phone}</p>
        <p className="email">{message.email}</p>
        <p className="created-at">{message.createdAt}</p>
      </div>
      <div className="message">{message.message}</div>
    </Wrapper>
  );
}

export default Message;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2rem;
  margin: 2rem 0;

  .client_info {
    padding: 1rem;
    background-color: #ffffff;
  }

  .phone,
  .email {
    color: #5e5e5e;
    font-style: italic;
    margin: 0.5rem 0;
  }

  .email {
    font-size: 0.7rem;
  }

  .message {
    background-color: #eee;
    padding: 1rem;
    overflow-wrap: break-word;
  }

  .created-at {
    background-color: #eee;
  }
`;
