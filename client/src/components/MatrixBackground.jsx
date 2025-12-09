import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CyberGrid() {
    const gridRef = useRef();
    const grid2Ref = useRef();
    const grid3Ref = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Animate first grid - moves toward viewer
        if (gridRef.current) {
            gridRef.current.position.z = ((time * 3) % 40) - 20;
        }

        // Animate second grid - offset for continuous effect
        if (grid2Ref.current) {
            grid2Ref.current.position.z = (((time * 3) + 20) % 40) - 20;
        }

        // Animate third grid - another offset
        if (grid3Ref.current) {
            grid3Ref.current.position.z = (((time * 3) + 13.33) % 40) - 20;
        }
    });

    return (
        <group>
            {/* Multiple grids for continuous scrolling effect */}
            <gridHelper
                ref={gridRef}
                args={[60, 40, '#00ff41', '#003b00']}
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <gridHelper
                ref={grid2Ref}
                args={[60, 40, '#00ff41', '#003b00']}
                position={[0, 0, 20]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <gridHelper
                ref={grid3Ref}
                args={[60, 40, '#00ff41', '#003b00']}
                position={[0, 0, 40]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

function DataStreams() {
    const streamsRef = useRef();

    useFrame((state) => {
        if (!streamsRef.current) return;

        const time = state.clock.getElapsedTime();
        const positions = streamsRef.current.geometry.attributes.position.array;

        // Create flowing line effect
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 2] = ((time * 5 + i) % 50) - 25;
        }

        streamsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    // Create vertical data stream lines
    const streamCount = 30;
    const positions = new Float32Array(streamCount * 3);

    for (let i = 0; i < streamCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 50; // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
        positions[i * 3 + 2] = Math.random() * 50 - 25; // z
    }

    return (
        <points ref={streamsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={streamCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.3}
                color="#00ff41"
                transparent
                opacity={0.8}
                sizeAttenuation={true}
            />
        </points>
    );
}

function ScanLines() {
    const linesRef = useRef();

    useFrame((state) => {
        if (linesRef.current) {
            linesRef.current.rotation.z = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={linesRef}>
            {[...Array(8)].map((_, i) => (
                <line key={i}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={2}
                            array={new Float32Array([
                                -30, 0, i * 5 - 20,
                                30, 0, i * 5 - 20
                            ])}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial color="#00ff41" opacity={0.1} transparent />
                </line>
            ))}
        </group>
    );
}

const MatrixBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 10, 20], fov: 75, rotation: [-0.4, 0, 0] }}
                gl={{
                    alpha: true,
                    antialias: true,
                    powerPreference: "high-performance"
                }}
            >
                {/* Dark fog for depth */}
                <fog attach="fog" args={['#000000', 15, 50]} />

                {/* Main animated grid */}
                <CyberGrid />

                {/* Data stream particles */}
                <DataStreams />

                {/* Additional scan lines */}
                <ScanLines />

                {/* Ambient light for subtle glow */}
                <ambientLight intensity={0.1} color="#00ff41" />
            </Canvas>
        </div>
    );
};

export default MatrixBackground;
