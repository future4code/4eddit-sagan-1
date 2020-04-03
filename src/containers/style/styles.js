import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color:#EDF1F9;
`
export const LongPageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color:#EDF1F9;
  .fa-spinner{
    color:#4472C4;
    margin-top: 50%
  }
`
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;
  border-right: 2px solid #4472C4;
  border-left: 2px solid #4472C4;
  background-color: white;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const LongContentWrapper = styled(ContentWrapper)`
  min-height: calc(100vh - 80px);
  justify-content:flex-start;
  flex-direction:column;
`
export const FormStyle = styled.form`
  width: 35%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
export const LongFormStyle = styled(FormStyle)`
  width: 70%;
  margin: 15px 0;
`
export const PostList = styled.div`
  width: 70%;
  height:100%;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
`
