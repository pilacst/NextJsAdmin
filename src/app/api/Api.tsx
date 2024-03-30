import useSWR from 'swr';

interface ICredentials {
  userName: string;
  password: string;
}

async function postRequest(url: string, arg: ICredentials) {
  console.log('arg ', arg);
  console.log('JSON.stringify(arg) ', JSON.stringify(arg));
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-TenentId': '12390480945-234y2398===',
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export const GetAuthToken = async ({
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
  const response = await postRequest(
    'https://localhost:7084/api/auth/',
    params,
  );
  return response;
};
