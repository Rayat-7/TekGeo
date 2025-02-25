import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton ,PrevButton ,usePrevNextButtons } from './EmblaCarouselArrowButtons'
import { DotButton,useDotButton } from './EmblaCarouselDotButton'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

// type PropType = {
//   slides: number[]
//   options?: EmblaOptionsType
// }
interface SlideData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }
  
  interface EmblaCarouselProps {
    slides: SlideData[];
    options?: EmblaOptionsType;
  }

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({slides,options}) => {
//   const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <div className="embla mt-24">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
           
            <div className="embla__slide " key={slide.id}>
              
               <p className='text-sm items items-center justify-center flex pb-4 sm:text-2xl mb-6 font-semibold'>{slide.description}</p>
              <div className="embla__slide__number bg-neutral-700 shadow-lg shadow-sky-600 ">
                
              <iframe
                    width="100%"
                    height="100%"
                    src={slide.imageUrl}
                    className='rounded-xl'
                    title="Feature Video"
                    allowFullScreen
                  />
                  
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '' 
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel


























// "use client";
// import { IconArrowNarrowRight } from "@tabler/icons-react";
// import { useState, useRef, useId, useEffect } from "react";

// interface SlideData {
//   name: string;
//   description: string;
//   videoUrl: string;
// }

// interface SlideProps {
//   slide: SlideData;
//   index: number;
//   current: number;
//   handleSlideClick: (index: number) => void;
// }

// const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
//   const slideRef = useRef<HTMLLIElement>(null);

//   const xRef = useRef(0);
//   const yRef = useRef(0);
//   const frameRef = useRef<number>();

//   useEffect(() => {
//     const animate = () => {
//       if (!slideRef.current) return;

//       const x = xRef.current;
//       const y = yRef.current;

//       slideRef.current.style.setProperty("--x", `${x}px`);
//       slideRef.current.style.setProperty("--y", `${y}px`);

//       frameRef.current = requestAnimationFrame(animate);
//     };

//     frameRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (frameRef.current) {
//         cancelAnimationFrame(frameRef.current);
//       }
//     };
//   }, []);

//   const handleMouseMove = (event: React.MouseEvent) => {
//     const el = slideRef.current;
//     if (!el) return;

//     const r = el.getBoundingClientRect();
//     xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
//     yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
//   };

//   const handleMouseLeave = () => {
//     xRef.current = 0;
//     yRef.current = 0;
//   };

//   const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
//     event.currentTarget.style.opacity = "1";
//   };

//   const { videoUrl, description, name } = slide;

//   return (
//     <div className="[perspective:1200px] [transform-style:preserve-3d]">
//       <li
//         ref={slideRef}
//         className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[50vmin] h-[60vmin] mx-[4vmin] z-10 "
//         onClick={() => handleSlideClick(index)}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           transform:
//             current !== index
//               ? "scale(0.98) rotateX(8deg)"
//               : "scale(1) rotateX(0deg)",
//           transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
//           transformOrigin: "bottom",
//         }}
//       >
//         <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  relative">
//             {name}
//           </h2>
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
//           style={{
//             transform:
//               current === index
//                 ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
//                 : "none",
//           }}
//         >
             
//           <iframe
//             className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
//             style={{
//               opacity: current === index ? 1 : 0.5,
//             }}
//             src={videoUrl}
//             loading="eager"
            
//           />
//           {current === index && (
//             <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
//           )}
//         </div>

//         {/* <article
//           className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
//             current === index ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//         >
//           <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  relative">
//             {name}
//           </h2>
//           <div className="flex justify-center">
//             <button className="mt-6  px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
//               {description}
//             </button>
//           </div>
//         </article> */}
//       </li>
//     </div>
//   );
// };

// interface CarouselControlProps {
//   type: string;
//   title: string;
//   handleClick: () => void;
// }

// const CarouselControl = ({
//   type,
//   title,
//   handleClick,
// }: CarouselControlProps) => {
//   return (
//     <button
//       className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
//         type === "previous" ? "rotate-180" : ""
//       }`}
//       title={title}
//       onClick={handleClick}
//     >
//       <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
//     </button>
//   );
// };

// interface CarouselProps {
//   slides: SlideData[];
// }

// export function Carousel({ slides }: CarouselProps) {
//   const [current, setCurrent] = useState(0);

//   const handlePreviousClick = () => {
//     const previous = current - 1;
//     setCurrent(previous < 0 ? slides.length - 1 : previous);
//   };

//   const handleNextClick = () => {
//     const next = current + 1;
//     setCurrent(next === slides.length ? 0 : next);
//   };

//   const handleSlideClick = (index: number) => {
//     if (current !== index) {
//       setCurrent(index);
//     }
//   };

//   const id = useId();

//   return (
//     <div
//       className="relative w-[70vmin] h-[70vmin] mx-auto"
//       aria-labelledby={`carousel-heading-${id}`}
//     >
//       <ul
//         className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
//         style={{
//           transform: `translateX(-${current * (100 / slides.length)}%)`,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <Slide
//             key={index}
//             slide={slide}
//             index={index}
//             current={current}
//             handleSlideClick={handleSlideClick}
//           />
//         ))}
//       </ul>

//       <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
//         <CarouselControl
//           type="previous"
//           title="Go to previous slide"
//           handleClick={handlePreviousClick}
//         />

//         <CarouselControl
//           type="next"
//           title="Go to next slide"
//           handleClick={handleNextClick}
//         />
//       </div>
//     </div>
//   );
// }
