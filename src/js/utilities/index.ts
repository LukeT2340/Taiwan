import { useCallback } from 'react'
import { gsap } from 'gsap'
import { AnimateTextProps } from '../../types'
import { inView } from 'framer-motion'

/**
 * @description Text animation using GSAP - https://gsap.com/docs/v3/Plugins/SplitText/
 * animate refs here, attach to the element you want to animate e.g. const headingRef = useRef<HTMLDivElement>(null)
 * import { useInView } from 'react-intersection-observer'
 * destructure the inView in the component the animation is being used
 * const { inView } = useInView({threshold: 0.2})
    useEffect(() => {
      animateText(headingRef, 'h1', 0, inView)
      animateText(headingRefTwo, 'h2', 0.2, inView)
    }, [animateText])
 */

const animateText = useCallback(
  ({ elementRef, selector, delay, inView }: AnimateTextProps) => {
    if (elementRef.current && inView) {
      const elements = elementRef.current.querySelectorAll(selector)

      elements.forEach((element, index) => {
        const split = new SplitText(element, {
          type: 'chars',
        })

        //now animate each character into place from 100px above, fading in:
        gsap.from(split.chars, {
          duration: 2,
          y: 300,
          autoAlpha: 0,
          stagger: 0.05,
          // add a small delay for each element
          delay: delay + index * 1,
        })
      })
    }
  },
  [inView]
)

export default animateText
