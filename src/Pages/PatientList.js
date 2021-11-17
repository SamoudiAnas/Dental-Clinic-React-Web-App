import React, { useState } from "react";
import styled from "styled-components";
import PatientListRequest from "../Components/PatientComponents/PatientListRequest";

function PatientList() {
  // eslint-disable-next-line
  const [viewMode, setViewMode] = useState("all");

  return (
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
      <div className="flex justify-between">
        <h3>Patient List</h3>
        <div className="selector">
          <select
            name="cars"
            id="cars"
            onChange={(e) => setViewMode(e.target.value)}
          >
            <option value="all">All</option>
            <option value="non approved">Non Approved</option>
            <option value="approved">Approved</option>
          </select>
        </div>
      </div>
      <div className="data-list">
        <PatientListRequest />
        <PatientListRequest />
        <PatientListRequest />
        <PatientListRequest />
        <PatientListRequest />
        <PatientListRequest />
      </div>
      <div className="data-controller flex justify-between">
        <div className="data-info">1 out of 5 pages</div>
        <div className="data-controllers">
          <span className="controller">&lt; Prev </span>
          <span className="controller">Next &gt;</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default PatientList;

export const Wrapper = styled.div`
  padding: 2rem;

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

  .flex {
    display: flex;

    h3 {
      margin-bottom: 1rem;
    }
  }

  .justify-between {
    justify-content: space-between;
  }

  .data-controller {
    color: ${(props) => props.theme.textSecondary};
    margin-top: 1rem;
  }

  .data-controllers {
    display: flex;
    gap: 1rem;
  }

  .controller {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
