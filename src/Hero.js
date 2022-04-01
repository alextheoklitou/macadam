import Carousel from './Carousel';

const Hero = () => (
  <div className="hero max-w-4xl m-auto" style={{ minHeight: '80vh' }}>
    <div className="flex-col hero-content lg:flex-row-reverse mb-8">
      <Carousel />
      <div>
        <h1 className="text-5xl font-bold">Macadam Cup 2022</h1>
        <p className="py-6">
        The Macadam Cup Sporting Competition has returned! Join us for free on Wednesday 6 April at Honor Oak Park to cheer on Team King's (a.k.a #TeamNorth) or Team GKT (a.k.a #TeamSouth) as the Arts & Sciences Students compete with the Medics Students to decide who will take home the prestigious Macadam Cup! 
        </p>
        <p className="mb-6">
          Whoever you support, join us for a great day out with friends. With more than 10 sports being played in beautiful King's Sport Honor Oak Park Sports Ground this is the perfect way to welcome spring. This event is sponsored by Aldi.
        </p>

        <span className="bg-kings font-bold text-white m-auto text-xl font-medium px-2.5 py-0.5 rounded">
          6 April 2022 - Honor Oak Park
        </span>
      </div>
    </div>
  </div>
);

export default Hero;
