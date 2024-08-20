import jwtDecode from 'jwt-decode'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const VerificaToken = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('codeburger:userData')
    if (token) {
      const parsedToken = JSON.parse(token)
      const decodedToken = jwtDecode(parsedToken.token)
      const currentTime = Date.now() / 1000

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('codeburger:userData')
        navigate('/')
      }
    } else {
      navigate('/')
    }
  }, [navigate])
}

export default VerificaToken
