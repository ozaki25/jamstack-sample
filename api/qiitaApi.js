import fetch from 'node-fetch';

// microCMSで作成したAPIのURLに変更
const baseUrl = 'https://jamstack-sample-oz.microcms.io/api/v1';

const headers = {
  // APIキーを設定
  'X-API-KEY': '8658a952-169f-45ad-b799-494fdf1cf770',
};

export async function getItems() {
  const res = await fetch(`${baseUrl}/items`, { headers });
  return res.json();
}

export async function getItem({ id }) {
  const res = await fetch(`${baseUrl}/items/${id}`, { headers });
  console.log({ res });
  return res.json();
}
