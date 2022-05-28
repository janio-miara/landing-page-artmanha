import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #282c34;
  overflow: hidden;

  .image{
    img{
      height: 100vh;
    }
  }

  .wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .logo{
      height: 30%;
    }
    
    .name{
      margin-top: 50px;
      height: 10%;
    }
    
 
  }

`
