import dynamic from 'next/dynamic';
import { useState } from "react";
import { Title } from '@/styles/pages/Home';

const DynamicComponent = dynamic(
   () => import('@/components/DynamicComponent'),
   // { loading: () => <p>Loading...</p>, ssr: false }
);  

export default function LazyLoad() {
   const [isAddComponent, setIsAddComponent] = useState(false);

   function handleAddToCart() {
      setIsAddComponent(true);
   }

   return (
      <div>
         <Title>Lazy Load with Next.js</Title>

         <button onClick={handleAddToCart}>Show component</button>

         { isAddComponent && <DynamicComponent /> }
      </div>
   );
}