import { Table } from "components/table";
import React from "react";
import styled from "styled-components";

const DashBoardPageStyles = styled.div``;
const DashboardPage = () => {
  return (
    <DashBoardPageStyles>
      <h1 className="dashboard-heading">Dashboard page</h1>
      <Table></Table>
    </DashBoardPageStyles>
  );
};

export default DashboardPage;
