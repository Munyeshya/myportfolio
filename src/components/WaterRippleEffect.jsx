import { useEffect, useRef } from 'react'

function WaterRippleEffect() {
  const canvasRef = useRef(null)
  const ripplesRef = useRef([])
  const animationFrameRef = useRef(0)
  const lastSpawnRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d')
    if (!context) return undefined

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const spawnRipple = (x, y, strength = 1) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 18,
        speed: 2.6 + strength * 0.6,
        opacity: 0.24 + strength * 0.06,
        lineWidth: 1.4 + strength * 0.55,
      })
    }

    const handlePointerMove = (event) => {
      if (mediaQuery.matches) return

      const now = performance.now()
      if (now - lastSpawnRef.current < 46) return

      lastSpawnRef.current = now
      spawnRipple(event.clientX, event.clientY, 0.9)
    }

    const handlePointerDown = (event) => {
      if (mediaQuery.matches) return
      spawnRipple(event.clientX, event.clientY, 1.6)
    }

    const animate = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)

      ripplesRef.current = ripplesRef.current.filter((ripple) => ripple.opacity > 0.01)

      ripplesRef.current.forEach((ripple) => {
        const gradient = context.createRadialGradient(
          ripple.x,
          ripple.y,
          Math.max(1, ripple.radius * 0.16),
          ripple.x,
          ripple.y,
          ripple.radius * 1.15,
        )

        gradient.addColorStop(0, `rgba(255, 214, 94, ${ripple.opacity * 0.12})`)
        gradient.addColorStop(0.55, `rgba(255, 168, 41, ${ripple.opacity * 0.28})`)
        gradient.addColorStop(1, 'rgba(255, 140, 0, 0)')

        context.beginPath()
        context.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        context.strokeStyle = gradient
        context.lineWidth = ripple.lineWidth
        context.stroke()

        context.beginPath()
        context.arc(ripple.x, ripple.y, ripple.radius * 0.58, 0, Math.PI * 2)
        context.strokeStyle = `rgba(255, 241, 209, ${ripple.opacity * 0.14})`
        context.lineWidth = Math.max(0.8, ripple.lineWidth * 0.5)
        context.stroke()

        ripple.radius += ripple.speed
        ripple.opacity *= 0.968
        ripple.lineWidth *= 0.996
      })

      animationFrameRef.current = window.requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="ripple-canvas-layer" aria-hidden="true" />
}

export default WaterRippleEffect
