import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const VerificaToken = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('codeburger:userData')
    const newToken = JSON.parse(token)

    if (token) {
      const decodedToken = jwtDecode(newToken.token)
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
