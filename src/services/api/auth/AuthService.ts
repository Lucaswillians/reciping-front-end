interface IAuth {
  accessToken: string;
}

const auth = async (email: string, password: string): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.get('/auth', {data: { email, password }});

    if (data) return data;
  
    return new Error('Erro no login');
  }
  catch (error) {
    console.log(error);
    return new Error((error as { message: string }).message || 'Erro no login')
  }
}

export const AuthService = {
  auth,
}


// criar arquivo da Api, fazendo a aquele esquema de verificação das rotas, se foi chamada com sucesso ou nao
// nao esquecer de criar esses arquivos, pois são de suma importancia para a ligação entre a chamada do back e front