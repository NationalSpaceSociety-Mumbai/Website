'use client'

import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    class Star {
      x: number; y: number; z: number; velocity: number; color: string
      constructor(initial = false) {
        this.x = (Math.random() - 0.5) * width * 2
        this.y = (Math.random() - 0.5) * height * 2
        this.z = initial ? Math.random() * width : width
        this.velocity = 0.15
        const rand = Math.random()
        if (rand > 0.97) this.color = '#38BDF8'
        else if (rand > 0.70) this.color = '#4B9CD3'
        else this.color = '#FFFFFF'
      }
      update() {
        this.z -= this.velocity * 20
        if (this.z <= 0) {
          this.x = (Math.random() - 0.5) * width * 2
          this.y = (Math.random() - 0.5) * height * 2
          this.z = width
        }
      }
      draw(ctx: CanvasRenderingContext2D) {
        const x = (this.x / this.z) * width + width / 2
        const y = (this.y / this.z) * width + height / 2
        const size = (1 - this.z / width) * 2.5
        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          ctx.beginPath()
          ctx.fillStyle = this.color
          ctx.globalAlpha = Math.min(1, (1 - this.z / width) * 1.5)
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
          ctx.globalAlpha = 1.0
        }
      }
    }

    const stars: Star[] = []
    for (let i = 0; i < 500; i++) stars.push(new Star(true))

    function animate() {
      if (!ctx || !canvas) return
      ctx.fillStyle = '#020617'
      ctx.fillRect(0, 0, width, height)
      stars.forEach(star => { star.update(); star.draw(ctx) })
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', handleResize)
    animate()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}
