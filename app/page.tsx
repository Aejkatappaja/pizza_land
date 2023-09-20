import { Header } from '@/components/header';
import { Pizza } from '@/components/card';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { PizzaType } from '@/types/types';
import { getAllPizzas } from '@/services/fetch-pizzas';

export default async function Home() {
  const pizzas = await getAllPizzas();
  return (
    <section className='cursor-default'>
      <Header />
      <Banner />
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-[15px] py-12 md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px]'>
          {pizzas?.map((pizza: PizzaType) => {
            return <Pizza key={pizza.id.toString()} pizza={pizza} />;
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
}
