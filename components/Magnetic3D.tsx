'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Trail, Sparkles, useTexture } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

// Animated Cube with Trail and Glow
function SecurityCube({ position }: { position: [number, number, number] }) {
    const outerRef = useRef<THREE.Mesh>(null)
    const innerRef = useRef<THREE.Mesh>(null)
    const glowRef = useRef<THREE.Mesh>(null)

    useFrame(({ mouse, clock }) => {
        const time = clock.getElapsedTime()
        if (outerRef.current && innerRef.current && glowRef.current) {
            // Smooth mouse parallax with easing
            const targetX = position[0] + mouse.x * 2
            const targetY = position[1] + mouse.y * 2
            outerRef.current.position.x += (targetX - outerRef.current.position.x) * 0.05
            outerRef.current.position.y += (targetY - outerRef.current.position.y) * 0.05

            // Complex rotation patterns
            outerRef.current.rotation.x = Math.sin(time * 0.3) * 0.2 + time * 0.15
            outerRef.current.rotation.y = Math.cos(time * 0.2) * 0.2 + time * 0.1
            outerRef.current.rotation.z = Math.sin(time * 0.15) * 0.1

            // Counter-rotating inner cube
            innerRef.current.rotation.x = -time * 0.5
            innerRef.current.rotation.y = -time * 0.4
            innerRef.current.rotation.z = Math.cos(time * 0.3) * 0.3

            // Pulsing glow
            const pulse = Math.sin(time * 2) * 0.3 + 1
            glowRef.current.scale.setScalar(pulse)
        }
    })

    return (
        <Trail
            width={3}
            length={8}
            color="#ccff00"
            attenuation={(t) => t * t}
        >
            <group position={position}>
                {/* Outer wireframe cube */}
                <mesh ref={outerRef}>
                    <boxGeometry args={[2.5, 2.5, 2.5]} />
                    <meshBasicMaterial
                        color="#ccff00"
                        wireframe
                        transparent
                        opacity={0.8}
                    />
                </mesh>

                {/* Glowing aura */}
                <mesh ref={glowRef} scale={0.8}>
                    <boxGeometry args={[2.5, 2.5, 2.5]} />
                    <meshBasicMaterial
                        color="#ccff00"
                        transparent
                        opacity={0.1}
                    />
                </mesh>

                {/* Inner rotating cube */}
                <mesh ref={innerRef} scale={0.6}>
                    <boxGeometry args={[2.5, 2.5, 2.5]} />
                    <meshStandardMaterial
                        color="#ccff00"
                        emissive="#ccff00"
                        emissiveIntensity={2.5}
                        metalness={1}
                        roughness={0}
                        transparent
                        opacity={0.6}
                    />
                </mesh>

                {/* Corner sparkles */}
                <Sparkles
                    count={20}
                    scale={3}
                    size={2}
                    speed={0.5}
                    color="#ccff00"
                />
            </group>
        </Trail>
    )
}

// AI Neural Node with Distortion and Pulsing
function AINode({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null)
    const ringRef = useRef<THREE.Mesh>(null)

    useFrame(({ mouse, clock }) => {
        const time = clock.getElapsedTime()
        if (meshRef.current && ringRef.current) {
            const targetX = position[0] + mouse.x * 1.5
            const targetY = position[1] + mouse.y * 1.5
            meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.08
            meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.08

            meshRef.current.rotation.y = time * 0.5
            meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.3

            // Orbiting ring
            ringRef.current.rotation.x = time * 0.8
            ringRef.current.rotation.z = time * 0.6

            // Pulsing scale
            const pulse = Math.sin(time * 1.5) * 0.2 + 1.3
            meshRef.current.scale.setScalar(pulse)
        }
    })

    return (
        <Float speed={4} rotationIntensity={0.8} floatIntensity={1.2}>
            <group position={position}>
                {/* Main distorted icosahedron */}
                <mesh ref={meshRef} scale={1.3}>
                    <icosahedronGeometry args={[1, 1]} />
                    <MeshDistortMaterial
                        color="#b537f2"
                        emissive="#b537f2"
                        emissiveIntensity={3}
                        distort={0.6}
                        speed={3}
                        metalness={0.8}
                        roughness={0.1}
                    />
                </mesh>

                {/* Orbiting ring */}
                <mesh ref={ringRef}>
                    <torusGeometry args={[2, 0.1, 16, 32]} />
                    <meshBasicMaterial
                        color="#ff00ff"
                        transparent
                        opacity={0.6}
                    />
                </mesh>

                {/* Particle field */}
                <Sparkles
                    count={30}
                    scale={4}
                    size={3}
                    speed={0.8}
                    color="#b537f2"
                />
            </group>
        </Float>
    )
}

// Blockchain Ring with Rotating Segments
function BlockchainRing({ position }: { position: [number, number, number] }) {
    const mainRef = useRef<THREE.Mesh>(null)
    const innerRef = useRef<THREE.Mesh>(null)
    const particlesRef = useRef<THREE.Points>(null)

    // Create particle ring
    const particles = useMemo(() => {
        const count = 100
        const positions = new Float32Array(count * 3)
        const radius = 1.2

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2
            positions[i * 3] = Math.cos(angle) * radius
            positions[i * 3 + 1] = Math.sin(angle) * radius
            positions[i * 3 + 2] = 0
        }
        return positions
    }, [])

    useFrame(({ mouse, clock }) => {
        const time = clock.getElapsedTime()
        if (mainRef.current && innerRef.current && particlesRef.current) {
            const targetX = position[0] + mouse.x * 1
            const targetY = position[1] + mouse.y * 1
            mainRef.current.position.x += (targetX - mainRef.current.position.x) * 0.06
            mainRef.current.position.y += (targetY - mainRef.current.position.y) * 0.06

            mainRef.current.rotation.x = time * 0.4
            mainRef.current.rotation.z = time * 0.3

            innerRef.current.rotation.x = -time * 0.6
            innerRef.current.rotation.z = -time * 0.5

            particlesRef.current.rotation.z = time * 0.8
        }
    })

    return (
        <Trail
            width={2}
            length={6}
            color="#00d4ff"
            attenuation={(t) => t * t * t}
        >
            <group position={position}>
                {/* Main torus */}
                <mesh ref={mainRef}>
                    <torusGeometry args={[1.2, 0.25, 16, 64]} />
                    <meshStandardMaterial
                        color="#00d4ff"
                        emissive="#00d4ff"
                        emissiveIntensity={2.5}
                        metalness={1}
                        roughness={0}
                    />
                </mesh>

                {/* Inner torus */}
                <mesh ref={innerRef} scale={0.7}>
                    <torusGeometry args={[1.2, 0.15, 16, 64]} />
                    <meshBasicMaterial
                        color="#ffffff"
                        transparent
                        opacity={0.5}
                    />
                </mesh>

                {/* Particle ring */}
                <points ref={particlesRef}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={particles.length / 3}
                            array={particles}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial
                        size={0.08}
                        color="#00d4ff"
                        transparent
                        opacity={0.8}
                        sizeAttenuation
                    />
                </points>

                <Sparkles
                    count={25}
                    scale={3}
                    size={2.5}
                    speed={0.6}
                    color="#00d4ff"
                />
            </group>
        </Trail>
    )
}

// Forensics Octahedron with Scanning Effect
function ForensicsOcta({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null)
    const wireRef = useRef<THREE.Mesh>(null)
    const scanRef = useRef<THREE.Mesh>(null)

    useFrame(({ mouse, clock }) => {
        const time = clock.getElapsedTime()
        if (meshRef.current && wireRef.current && scanRef.current) {
            const targetX = position[0] + mouse.x * 0.7
            const targetY = position[1] + mouse.y * 0.7
            meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.04
            meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.04

            meshRef.current.rotation.x = time * 0.4
            meshRef.current.rotation.y = time * 0.5
            wireRef.current.rotation.x = time * 0.4
            wireRef.current.rotation.y = time * 0.5

            // Scanning plane
            scanRef.current.position.y = Math.sin(time * 2) * 1.5
        }
    })

    return (
        <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group position={position}>
                {/* Solid core */}
                <mesh ref={meshRef} scale={1.2}>
                    <octahedronGeometry args={[1]} />
                    <meshStandardMaterial
                        color="#ff00ff"
                        emissive="#ff00ff"
                        emissiveIntensity={2.2}
                        metalness={0.9}
                        roughness={0.1}
                        transparent
                        opacity={0.7}
                    />
                </mesh>

                {/* Wireframe shell */}
                <mesh ref={wireRef} scale={1.3}>
                    <octahedronGeometry args={[1]} />
                    <meshBasicMaterial
                        color="#ffffff"
                        wireframe
                        transparent
                        opacity={0.8}
                    />
                </mesh>

                {/* Scanning plane */}
                <mesh ref={scanRef} rotation={[0, 0, 0]}>
                    <planeGeometry args={[3, 0.05]} />
                    <meshBasicMaterial
                        color="#ff00ff"
                        transparent
                        opacity={0.6}
                    />
                </mesh>

                <Sparkles
                    count={20}
                    scale={3}
                    size={2}
                    speed={0.7}
                    color="#ff00ff"
                />
            </group>
        </Float>
    )
}

// Enhanced Data Points with Trails
function DataPoint({ position, color }: { position: [number, number, number], color: string }) {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame(({ mouse, clock }) => {
        const time = clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.position.x = position[0] + mouse.x * 2 + Math.sin(time + position[0]) * 0.5
            meshRef.current.position.y = position[1] + mouse.y * 2 + Math.cos(time + position[1]) * 0.5

            const pulse = Math.sin(time * 3) * 0.3 + 1
            meshRef.current.scale.setScalar(pulse)
        }
    })

    return (
        <Trail
            width={1}
            length={10}
            color={color}
            attenuation={(t) => t * t}
        >
            <Float speed={5} rotationIntensity={0} floatIntensity={1.5}>
                <Sphere ref={meshRef} position={position} args={[0.25, 16, 16]}>
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={4}
                        metalness={1}
                        roughness={0}
                    />
                </Sphere>
            </Float>
        </Trail>
    )
}

// Animated Holographic Grid
function HolographicGrid() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const time = clock.getElapsedTime()
            meshRef.current.rotation.z = Math.sin(time * 0.2) * 0.1
            meshRef.current.position.z = -8 + Math.sin(time * 0.5) * 0.5
        }
    })

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, 0]} position={[0, -3, -8]}>
            <planeGeometry args={[30, 30, 60, 60]} />
            <meshBasicMaterial
                color="#00d4ff"
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    )
}

export default function Magnetic3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 75 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                style={{ background: 'transparent' }}
            >
                {/* Cinematic Lighting */}
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={3} color="#ccff00" />
                <pointLight position={[-10, -10, -5]} intensity={3} color="#00d4ff" />
                <pointLight position={[0, 0, 8]} intensity={2.5} color="#b537f2" />
                <pointLight position={[5, -5, 5]} intensity={2} color="#ff00ff" />
                <spotLight
                    position={[0, 10, 0]}
                    angle={0.5}
                    penumbra={1}
                    intensity={3}
                    color="#ffffff"
                    castShadow
                />

                {/* Background Grid */}
                <HolographicGrid />

                {/* Premium 3D Elements with Advanced Animations */}
                <SecurityCube position={[3.5, 2, -2]} />
                <AINode position={[-4, 1, 0]} />
                <BlockchainRing position={[3, -2, -1]} />
                <ForensicsOcta position={[-2.5, -2, 1]} />

                {/* Dynamic Data Points with Trails */}
                <DataPoint position={[5, -0.5, 2]} color="#ccff00" />
                <DataPoint position={[-5, 0.8, 1]} color="#00d4ff" />
                <DataPoint position={[1, 3.5, 0]} color="#ff00ff" />
                <DataPoint position={[-1, -3, 2]} color="#b537f2" />

                {/* Post-Processing Effects */}
                <EffectComposer>
                    <Bloom
                        intensity={1.5}
                        luminanceThreshold={0.2}
                        luminanceSmoothing={0.9}
                        height={300}
                    />
                    <ChromaticAberration
                        blendFunction={BlendFunction.NORMAL}
                        offset={[0.001, 0.001]}
                    />
                    <Vignette
                        offset={0.3}
                        darkness={0.5}
                        eskil={false}
                        blendFunction={BlendFunction.NORMAL}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    )
}
