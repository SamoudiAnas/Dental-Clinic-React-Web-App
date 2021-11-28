import React from "react";
import styled from "styled-components";
import Layout from "../Components/Layout/Layout";

function Overview() {
  return (
    <Layout>
      <Wrapper>
        <h3>General Info</h3>
        <div className="general-info">
          <div className="info-tap">
            <h1 className="info-count">5</h1>
            <p className="info-title">Awaiting for approval</p>{" "}
          </div>
          <div className="info-tap">
            <h1 className="info-count">12</h1>
            <p className="info-title">Today's clients</p>{" "}
          </div>
          <div className="info-tap">
            <h1 className="info-count">17</h1>
            <p className="info-title">Total Patients</p>{" "}
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Overview;

const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  h3 {
    color: ${(props) => props.theme.secondary};
  }

  .general-info {
    width: 100%;
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  .info-tap {
    padding: 1.5rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    transition: all 0.3s ease;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.secondary};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
      border-radius: 0.25rem;
      .info-title {
        color: white;
      }
    }
  }

  .info-count {
    color: ${(props) => props.theme.primary};
  }

  .info-title {
    color: ${(props) => props.theme.secondary};
  }
`;
