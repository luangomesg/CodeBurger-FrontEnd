import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.35));
    border: none;

    &:hover {
      border: 2px solid #9758a6;
      background-color: #efefef;
      color: #9758a6;
    }

    &:disabled {
      border: none;
      background-color: #9f9f9f;
      color: #efefef;
    }
  }
`

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
    border-radius: 10px;
  }
`

export const Button = styled.button`
  margin-top: 16px;
  border-radius: 8px;
  background: #9758a6;
  height: 45px;
  border: none;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`
