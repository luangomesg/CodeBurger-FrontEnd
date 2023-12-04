import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

const verificaToken = () => {
  const token = localStorage.getItem('codeburger:userData')

  if (token) {
    const decodedToken = jwt_decode(token)
    const currentTime = Date.now() / 1000

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('codeburger:userData')
      navigate('/login')
    }
  } else {
    navigate('/login')
  }
}
