
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
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
})