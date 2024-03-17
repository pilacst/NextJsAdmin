import useSWR from 'swr';

interface ICredentials {
  userName: string;
  password: string;
}

async function postRequest(arg: ICredentials) {
  return fetch('https://localhost:7084/auth/', {
    method: 'POST',
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

const AuthToken = ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  const params: ICredentials = {
    password,
    userName,
  };
  const response = postRequest(params);
};

export default AuthToken;
