import Hero from './Components/Hero';
import PopularProducts from './Components/PopularProducts';
import SuperQuality from './Components/SuperQuality';
import Services from './Components/Services';
import SpecialOffers from './Components/SpecialOffers';
import CustomerReviews from './Components/CustomerReviews';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Nav from './Components/Nav';



const App = () => 
  
  (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r ml-[50px] mr-[20px]">
     <Hero />
    </section>
    <section className="xl:padding-l wide:padding-r mt-[-150px] ">
    <SuperQuality />
    </section>
    <section className="padding mt-10 mr-[10px] ml-[50px]">
    <PopularProducts />
    </section>
    <section className="padding-x py-10">
     <Services></Services>
    </section>
    <section className="padding">
    <SpecialOffers></SpecialOffers>
    </section>
    <section className="bg-pale-blue padding">
   <CustomerReviews></CustomerReviews>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe></Subscribe>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
     <Footer></Footer>
    </section>

  </main>
  );


export default App;