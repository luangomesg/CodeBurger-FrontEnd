import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #d3d3d3;
  align-items: center;
`

export const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`

export const EditIconStyle = styled(EditIcon)`
  cursor: pointer;
  color: #323050;
`

export const DeleteIconStyle = styled(DeleteIcon)`
  cursor: pointer;
  color: #323050;
  margin-right: 15px;
`
