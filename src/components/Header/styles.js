import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 1440px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  position: absolute;
  width: 1440px;
  height: 58px;
  left: 0px;
  top: 0px;
  background: linear-gradient(180deg, rgba(20, 20, 20, 0.5) 0%, rgba(20, 20, 20, 0) 100%);

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 16px;
  }
`; 

export const Link = styled.li`
  width: ${props => props.width};
  height:  20px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: ${props => props.selected ? '700' : '400'};
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;

export const LinkIcon = styled.li`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
