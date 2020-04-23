import { Container } from 'react-bootstrap';
import { getItem, getItems } from '../../api/qiitaApi';

function Item({ item }) {
  return (
    <Container>
      <h1>{item.title}</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const data = await getItem({ id: params.id });
  console.log(data);
  const item = { id: data.id, title: data.title, body: data.body };
  return { props: { item } };
}

export async function getStaticPaths() {
  const data = await getItems();
  const paths = data.contents.map(item => `/items/${item.id}`);
  return { paths, fallback: false };
}

export default Item;
