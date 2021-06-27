import { GetServerSideProps } from 'next';
import { Title } from '@/styles/pages/Home';
// import math from '../lib/math'

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function DynamicImportLib({ recommendedProducts }: HomeProps) {
  async function handleSum() {
    const math = (await import('../lib/math')).default;   // --> // The lib uses "export default"

    alert("Sum: " + math.sum(3, 7));
  }

  return (
    <div>
      <section>
        <Title>Products </Title>

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

      <button onClick={handleSum}>Sum</button>
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