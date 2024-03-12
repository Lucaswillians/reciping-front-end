import { useAuthContext } from "../../contexts/AuthContext";
import {useState} from 'react'

interface ILoginProps {
  children: React.ReactNode;
}

export const Login: React.FC<ILoginProps> = ({children}) => {
  const { isAuthenticated, login} = useAuthContext();

  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 

  if (isAuthenticated) return (
    <>{children}</>
  )

  return (
    <div>
      login
      {/*
          no componente button, a onde vai ser criado para apertar para fazer o login de fato, ou seja
          o botao entrar ne, devemos passar isso quando formos cria-los:
          
          <Button
              onClick={() => login('', '')}
            >
          
         aqueles campos vazios ali, são os campos de email e senha   

        depois ne, no componente de input deve ser passado o seguinte nele depois

          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
          >

          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
          >

        se foi repetido duas vezes, com tipos diferentes por serem input distintos, mas com o mesmo
        objetivo, logo, esses valores passados devem ser distintos, nota-se também
        que esses valores sao os mesmos do useState usado la no topo.

      */}
    </div>
  );
}


/*
-- fazer isso para colocar no botao de logout quando ele ser criado --

  const { Logout } = useAuthContext();
    nota -> nao esquecer do import desse -useAuthContext- 

  e no envolver do botao, a onde tiver o onClick={}
  voce envolve desse jeito no exemplo abaixo:
    <button onClick={Logout}
*/

