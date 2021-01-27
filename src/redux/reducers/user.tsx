type Props = {
  type: string;
  payload: IUser;
};

const INITIAL_STATE: IUser = { firstName: 'Lucas' } as IUser;

const UserReducer = (state = INITIAL_STATE, { type, payload }: Props) => {
  switch (type) {
    default:
      return state;
  }
};

export default UserReducer;
