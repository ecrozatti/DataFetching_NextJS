import dynamic from 'next/dynamic';
import { useState } from "react";
import { Title, MessageAPI, Message, DivPage, DivProducts } from '@/styles/pages/lazy-load';

import SEO from '@/components/SEO';

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
      <DivPage>
         <SEO 
            title="Server Side Rendering" 
            image="image.png"
            shouldExcludeTitleSuffix={false}
         />

         <section>
            <Title>Lazy Load with Next.js</Title>
            <Message>- The component is dynamically loaded</Message>
            <button onClick={handleAddToCart}>Show component</button>
            { isAddComponent && <DynamicComponent /> }
         </section>
      </DivPage>
   );
}