import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FRIEND_MUTATION } from '../../graphql/mutations';

export const FriendAdd: FC<{ onClick: (email: string) => void }> = ({
  onClick,
}) => {
  const [email, setEmail] = useState<string>("");
  const [addFriend] = useMutation(ADD_FRIEND_MUTATION, {
    onCompleted: () =>  setEmail("")
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFriend({ variables: { email } }).catch(error => console.log(error.message));
  };
  return (
    <form className="box mt-2">
      <label className="label" htmlFor="email">
        Invite a friend
      </label>
      <input
        className="input-text"
        name="email"
        id="email"
        value={email}
        onChange={handleChange}
      />
      <button className="btn mt-2" onClick={handleSubmit}>
        invite
      </button>
    </form>
  );
};
