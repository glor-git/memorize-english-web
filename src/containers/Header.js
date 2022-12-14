import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <HeaderWrapper>
      <Link to={'/'}><Logo>My English Note</Logo></Link>
      <Items>
        <Item>
          <Link to={'/myNote'}>MyNote</Link>
        </Item>
      </Items>
    </HeaderWrapper>
  );
}
const Logo = styled.span`
  font-family: "Rubik Distressed", cursive;
  color: white;
`;
const Items = styled.div`
  display: flex;
`;

const Item = styled.span`
  margin-right: 15px;
  a {
    color: #fff;
  }
  a:hover {
    color: gray;
  }
`;
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #000;
  color: #fff;
  padding: 20px;
`;
