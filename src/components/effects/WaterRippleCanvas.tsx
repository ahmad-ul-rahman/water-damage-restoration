import React, { useEffect, useRef, useState } from 'react'
import { Renderer, Program, Mesh, Triangle } from 'ogl'

interface WaterRippleCanvasProps {
  className?: string
}

export const WaterRippleCanvas: React.FC<WaterRippleCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // On small mobile screens (< 768px), fallback to high-perf CSS gradient as requested
    const isMobile = window.innerWidth < 768

    if (prefersReducedMotion || isMobile) {
      setUseFallback(true)
      return
    }

    const container = containerRef.current
    if (!container) return

    let renderer: Renderer
    try {
      renderer = new Renderer({
        alpha: true,
        dpr: Math.min(window.devicePixelRatio, 1.5),
        powerPreference: 'high-performance',
      })
    } catch {
      setUseFallback(true)
      return
    }

    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    container.appendChild(gl.canvas)
    gl.canvas.style.position = 'absolute'
    gl.canvas.style.top = '0'
    gl.canvas.style.left = '0'
    gl.canvas.style.width = '100%'
    gl.canvas.style.height = '100%'
    gl.canvas.style.pointerEvents = 'none'

    const geometry = new Triangle(gl)

    const vertex = /* glsl */ `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    const fragment = /* glsl */ `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      varying vec2 vUv;

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        vec2 uv = vUv;

        // Interactive mouse ripple distance
        vec2 mouseNorm = uMouse / uResolution;
        float dist = distance(st, mouseNorm);
        float mouseWave = sin(dist * 24.0 - uTime * 4.0) * exp(-dist * 3.5) * 0.04;

        // Ambient fluid ocean waves
        float wave1 = sin(uv.x * 6.0 + uTime * 0.8 + uv.y * 3.0) * 0.025;
        float wave2 = cos(uv.y * 8.0 - uTime * 0.6 + uv.x * 4.0) * 0.02;
        float wave3 = sin(dist * 12.0 - uTime * 1.5) * 0.015;

        vec2 distortedUv = uv + vec2(wave1 + mouseWave, wave2 + wave3);

        // Dark navy base (#0B1528) to deep cyan/aqua highlights
        vec3 deepNavy = vec3(0.043, 0.082, 0.157); // #0B1528
        vec3 darkAqua = vec3(0.0, 0.28, 0.38);
        vec3 brightAqua = vec3(0.0, 0.898, 1.0);  // #00E5FF

        float pattern = sin(distortedUv.x * 8.0 + uTime * 0.5) * cos(distortedUv.y * 6.0 + uTime * 0.7);
        float blend = smoothstep(-0.8, 1.2, pattern);

        vec3 color = mix(deepNavy, darkAqua, blend * 0.5);
        // Caustic ripple highlights
        float rippleHighlight = pow(clamp(mouseWave * 15.0 + wave1 * 8.0, 0.0, 1.0), 3.0);
        color += brightAqua * rippleHighlight * 0.35;

        // Soft vignette
        float vignette = 1.0 - smoothstep(0.4, 1.4, length(st - 0.5));
        
        gl_FragColor = vec4(color, 0.7 * vignette);
      }
    `

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [container.clientWidth, container.clientHeight] },
        uMouse: { value: [container.clientWidth * 0.5, container.clientHeight * 0.5] },
      },
      transparent: true,
    })

    const mesh = new Mesh(gl, { geometry, program })

    function resize() {
      if (!container) return
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      program.uniforms.uResolution.value = [width, height]
    }
    window.addEventListener('resize', resize)
    resize()

    let mouseX = container.clientWidth * 0.5
    let mouseY = container.clientHeight * 0.5

    function onMouseMove(e: MouseEvent) {
      if (!container) return
      const rect = container.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = rect.height - (e.clientY - rect.top)
    }
    window.addEventListener('mousemove', onMouseMove)

    let animationFrameId: number
    let clock = 0

    function update() {
      clock += 0.015
      program.uniforms.uTime.value = clock

      // Smooth mouse interpolation
      const currentMouse = program.uniforms.uMouse.value
      currentMouse[0] += (mouseX - currentMouse[0]) * 0.05
      currentMouse[1] += (mouseY - currentMouse[1]) * 0.05

      renderer.render({ scene: mesh })
      animationFrameId = requestAnimationFrame(update)
    }

    animationFrameId = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      if (gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {useFallback && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,229,255,0.18),rgba(11,21,40,0.95)_70%)]" />
      )}
    </div>
  )
}
