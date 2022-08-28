
import styled from '@emotion/styled'
export const Container = styled.div({
  label: 'Container',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})


export const Head = styled.div({
  label: 'Head',
  flex:'20%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'pink'
})
export const Content = styled.div({
  label: 'Content',
  flex:'80%',
  width: '90%',
  paddingTop:"2rem",
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
})
export const Col = styled.div({
  label: 'Col',
  flex:1,
  width: '33%',
  paddingTop:"2rem",
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  border: '1px solid gray',
  margin: '0 10px',
  borderRadius: '10px',
})
export const HeaderText = styled.div({
width: '100%',
textAlign: 'center',
fontSize: '24px',
fontWeight: 'bold',


})