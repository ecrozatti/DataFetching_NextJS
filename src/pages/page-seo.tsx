import { GetServerSideProps } from 'next';
import { Title } from '@/styles/pages/Home';

import SEO from '@/components/SEO';

interface IProduct {
  id: string;
  title: string;
}

interface IPageProps {
  recommendedProducts: IProduct[];
}

export default function PageSEO({ recommendedProducts }: IPageProps) {
  return (
    <div>
      <SEO 
        title="DevCommerce, the best e-commerce!" 
        image="rocketseat.png"
        shouldExcludeTitleSuffix 
      />

      <section>
        <Title>Page with SEO tags</Title>
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

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`)
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}