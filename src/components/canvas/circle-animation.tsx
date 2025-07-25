'use client'

import { useEffect, useRef, useState } from 'react'

interface Circle {
    x: number
    y: number
    radius: number
    color: string
}

export function CircleAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [circles, setCircles] = useState<Circle[]>([])
    const [isAdding, setIsAdding] = useState(true)
    const animationFrameRef = useRef<number>()

    // Canvas 크기 설정
    const width = 400
    const height = 300

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // 1초마다 원 추가/제거
        const interval = setInterval(() => {
            setCircles(prevCircles => {
                if (isAdding) {
                    // 원 추가
                    if (prevCircles.length >= 5) {
                        setIsAdding(false)
                        return prevCircles
                    }
                    return [
                        ...prevCircles,
                        {
                            x: Math.random() * (width - 60) + 30,
                            y: Math.random() * (height - 60) + 30,
                            radius: 20,
                            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
                        },
                    ]
                } else {
                    // 원 제거
                    if (prevCircles.length <= 0) {
                        setIsAdding(true)
                        return prevCircles
                    }
                    return prevCircles.slice(0, -1)
                }
            })
        }, 1000)

        // 애니메이션 함수
        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            // 배경 그리기
            ctx.fillStyle = '#f8f9fa'
            ctx.fillRect(0, 0, width, height)

            // 원 그리기
            circles.forEach(circle => {
                ctx.beginPath()
                ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
                ctx.fillStyle = circle.color
                ctx.fill()
                ctx.strokeStyle = '#ffffff'
                ctx.lineWidth = 2
                ctx.stroke()
            })

            // 카운터 표시
            ctx.fillStyle = '#000000'
            ctx.font = '16px Arial'
            ctx.textAlign = 'center'
            ctx.fillText(`Circles: ${circles.length} / 5`, width / 2, 30)

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            clearInterval(interval)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [circles, isAdding])

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="rounded-lg border shadow-sm"
        />
    )
} 