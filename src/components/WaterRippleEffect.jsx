import { useEffect, useRef } from 'react'

function WaterRippleEffect() {
  const haloRef = useRef(null)
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const currentRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const frameRef = useRef(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const halo = haloRef.current
    if (!halo || mediaQuery.matches) return undefined

    const moveHalo = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.16
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.16

      halo.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0) translate(-50%, -50%)`
      frameRef.current = window.requestAnimationFrame(moveHalo)
    }

    const handlePointerMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY }
      halo.classList.add('is-visible')
    }

    const handlePointerLeave = () => {
      halo.classList.remove('is-visible')
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)

    moveHalo()

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div ref={haloRef} className="cursor-halo-layer" aria-hidden="true">
      <span className="cursor-halo-core" />
      <span className="cursor-halo-ring" />
    </div>
  )
}

export default WaterRippleEffect
