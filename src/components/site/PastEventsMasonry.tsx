import Masonry from '@/components/site/Masonry';

const items = [
  { id: '1', img: '/past/event1.jpg', url: '#', height: 560 },
  { id: '2', img: '/past/event2.jpg', url: '#', height: 420 },
  { id: '3', img: '/past/event3.jpg', url: '#', height: 620 },
  { id: '4', img: '/past/event4.jpg', url: '#', height: 360 },
  { id: '5', img: '/past/event5.jpg', url: '#', height: 500 },
  { id: '6', img: '/past/event6.jpg', url: '#', height: 300 },
  { id: '7', img: '/past/event7.jpg', url: '#', height: 540 },
  { id: '8', img: '/past/event8.jpg', url: '#', height: 420 },
  { id: '9', img: '/past/event9.jpg', url: '#', height: 480 },
  { id: '10', img: '/past/event10.jpg', url: '#', height: 520 },
  { id: '11', img: '/past/event11.jpg', url: '#', height: 380 },
  { id: '12', img: '/past/event12.jpg', url: '#', height: 600 },
  { id: '13', img: '/past/event13.jpg', url: '#', height: 440 },
];

export function PastEventsMasonry() {
  return (
    <section id="past-events" className="py-24 md:py-32 bg-[#0B1F26] text-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400/80">Past Events</p>
          <h2 className="mt-4 font-display text-3xl md:text-[40px] font-semibold tracking-[-0.03em] text-white">
            A glimpse into the energy we’ve built
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300/90 max-w-2xl">
            From visionary keynotes to hands-on workshops — every moment reflects innovation in action.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[24px]">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.97}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
}
