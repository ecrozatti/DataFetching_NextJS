import { GetStaticProps } from "next";
import { Title } from '@/styles/pages/Home';

interface IProduct {
   id: string;
   title: string;
}

interface ITopProductsProps {
   products: IProduct[];
}

export default function StaticSiteGeneration({ products }: ITopProductsProps) {
   return (
      <div>
         <Title>Static Site Generation with Next.js</Title>
         <h1>Top 10 products</h1>
         <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                {product.title}
              </li>
            );
          })}
        </ul>
      </div>
   )
}

export const getStaticProps: GetStaticProps<ITopProductsProps> = async (context) => {
   const response = await fetch('http://localhost:3333/products')
   const products = await response.json();

   return {
      props: {
         products,
      },
      revalidate: 10,
   }
}