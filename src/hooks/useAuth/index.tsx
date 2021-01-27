import { useSelector, useDispatch } from 'react-redux';
// import { fetchUser } from '@redux/actions';

export function useAuth() {
  const dispatch = useDispatch();
  const user = useSelector((state: IReducerStates) => state.user);

  return {
    user,
    // fetchUser: (): Promise<IUser> => dispatch(fetchUser()) as any,
  };
}
