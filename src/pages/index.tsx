import { GetServerSideProps } from 'next';
import { Title } from '@/styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <div>
      <section>
        <Title>Server Side Rendering with Next.js</Title>
        <h1>Products</h1>

        <ul>
          {recommendedProducts.map(product => {
            return (
              <li key={product.id}>
                {product.title}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`)
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}