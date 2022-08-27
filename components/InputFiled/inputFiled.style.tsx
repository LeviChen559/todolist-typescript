import styled from "@emotion/styled"

export const TaskInputContainer = styled.div({
    label: 'TaskInputContainer',
    width: '400px',
    height: '70px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  })
  
  
  export const InputContainer = styled.div({
    label: 'TaskInputContainer',
    width: '325px',
    height: '70px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    
  })
  export const TaskInput = styled.input({
    label: 'TaskInput',
    width: '325px',
    height: '35px',
    borderRadius: '10px 0 0 0',
    backgroundColor: 'lightgrey',
    border:0
  })
  export const TaskInput2 = styled.input({
    label: 'TaskInput2',
    width: '225px',
    height: '35px',
    borderRadius: '0 0 0 10px',
    backgroundColor: 'lightgrey',
    border:0,
    color:'grey'
  })
  export const TaskInput3 = styled.div({
    label: 'TaskInput3',
    width: '100px',
    height: '35px',
    backgroundColor: 'lightgrey',
    border:0,
    color:'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  
  })
  export const InputContainer2 = styled.div({
    label: 'InputContainer2',
    width: '325px',
    height: '35px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  })
  export const TaskButton = styled.button({
    label: 'TaskInput',
    width: '75px',
    height: '70px',
    borderRadius:'0px 10px 10px 0px',
    backgroundColor:'orange',
    color:'white',
    border:'0px',
    cursor:'pointer',
    fontSize:'16px',
  })