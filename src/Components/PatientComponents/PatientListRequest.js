import React from "react";
import styled from "styled-components";
import image from "../../Images/image.jpeg";

function PatientListRequest() {
  return (
    <Wrapper>
      <img src={image} alt="avatar" />
      <h4 className="patient-name">Anas Samoudi</h4>
      <p className="reason">06 12 34 56 78</p>
      <h5 className="date">1.30pm - 2.30pm</h5>
      <button className="accept">Accept</button>
      <button className="reschedule">Reschedule</button>
    </Wrapper>
  );
}

export default PatientListRequest;

export const Wrapper = styled.div`
  padding: 1.5rem 2rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 3fr 3fr 3fr;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.light};

  img {
    width: 2.5rem;
    border-radius: 9999px;
    object-fit: cover;
  }

  .patient-name {
    color: ${(props) => props.theme.secondary};
  }

  .reason {
    color: ${(props) => props.theme.textSecondary};
  }

  .accept {
    color: white;
    font-weight: 600;
    border: transparent;
    background-color: ${(props) => props.theme.primary};
    padding: 0.75rem;
    transition: letter-spacing 0.2s ease;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.primaryHover};
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }

  .reschedule {
    font-weight: 600;
    border: transparent;
    background-color: transparent;
    color: ${(props) => props.theme.secondary};
    padding: 0.75rem;
    &:hover {
      cursor: pointer;
      background-color: #efefef;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }
`;
