import Link from 'next/link';
import { Container, ListGroup } from 'react-bootstrap';
import { getItems } from '../../api/qiitaApi';

function Items({ items }) {
  return (
    <Container>
      <h1>Hello</h1>
      <ListGroup>
        {items.map(item => (
          <Link key={item.id} href="/items/[id]" as={`/items/${item.id}`}>
            <ListGroup.Item action>{item.title}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await getItems();
  console.log(data);
  const items = data.contents.map(item => ({ id: item.id, title: item.title }));
  return { props: { items } };
}

export default Items;
