import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cdc1c1;
  padding: 100px 0;
`
export const StyledCard = styled.div`
  border-radius: 10px;
  width: 500px;
  height: 600px;
  background-color: white;
  box-shadow: 2px 3px 4px 2px gray;
  overflow: hidden;
`
export const StyledImg = styled.img`
  width: 100%;
  height: 300px;
`

export const StyledContent = styled.div`
  padding: 20px;
`

export const StyledInfoWrapper = styled.div`
  h2 {
    background: linear-gradient(to bottom, #ffd194, #d1913c);
    border-radius: 12px;
    display: inline-block;
    padding: 2px 10px;
    font-size: 14px;
    color: aliceblue;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 10px;
  }
`

export const StyledDesc = styled.p`
  margin-bottom: 20px;
  letter-spacing: 0.04em;
  font-weight: 100;
  font-size: 18px;
  line-height: 1.3;
  color: ${props => {
    switch (props.$textColor) {
      case 'red' :
            return 'tomato'
      default:
        return 'gray'
    }
  }
   };
`

export const StyledAuthorInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`

export const StyledName = styled.p`
  font-weight: 800;
  line-height: 1.3;
`