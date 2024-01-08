import { axios } from '@/apis/requestClient';
import { IPostSignUpRequest } from '@/queries/auth';

export const postSignUp = async ({ name, email, password }: IPostSignUpRequest) => {
  const { data } = await axios.post('/auth/register', { name, email, password });
  return data;
};