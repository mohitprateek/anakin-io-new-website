"use client";

import { useState, useMemo, memo, useCallback, useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";
import { motion } from "framer-motion";
import { Plus, Minus, RotateCcw } from "lucide-react";
import { HIGHLIGHTED_COUNTRIES } from "@/lib/highlightedCountries";

// 50m resolution for sharper boundaries when zoomed
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// Equirectangular projection config — aligns 1:1 with terrain image
const MAP_WIDTH = 800;
const MAP_HEIGHT = 400;

// Computed from geoEquirectangular projection:
const IMG_X = 1;
const IMG_Y = 0.5;
const IMG_W = 798;
const IMG_H = 399;

const PROJECTION_CONFIG = {
  scale: 127,
  center: [0, 0] as [number, number],
};

// Colors
const OCEAN_COLOR = "#b8d4e3"; // Soft blue — plain ocean
const UNHIGHLIGHTED_FILL = "#e8e2da";
const UNHIGHLIGHTED_STROKE = "#b8b0a6";
const HIGHLIGHTED_STROKE = "rgba(40,40,40,0.45)";
const HIGHLIGHTED_HOVER_STROKE = "rgba(20,20,20,0.7)";

// Shared style objects
const MASK_STYLE = {
  default: { outline: "none" } as React.CSSProperties,
  hover: { outline: "none" } as React.CSSProperties,
  pressed: { outline: "none" } as React.CSSProperties,
};

// Memoized geography to avoid re-renders
const MemoGeography = memo(function MemoGeography({
  geo,
  isHighlighted,
  onMouseEnter,
  onMouseLeave,
}: {
  geo: any;
  isHighlighted: boolean;
  onMouseEnter: (name: string, e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}) {
  const name = geo.properties?.name || "";
  return (
    <Geography
      geography={geo}
      onMouseEnter={(e: React.MouseEvent) => onMouseEnter(name, e)}
      onMouseMove={(e: React.MouseEvent) => onMouseEnter(name, e)}
      onMouseLeave={onMouseLeave}
      fill={isHighlighted ? "transparent" : UNHIGHLIGHTED_FILL}
      stroke={isHighlighted ? HIGHLIGHTED_STROKE : UNHIGHLIGHTED_STROKE}
      strokeWidth={isHighlighted ? 0.6 : 0.3}
      style={{
        default: {
          outline: "none",
          transition: "all 0.2s ease",
          cursor: "pointer",
        },
        hover: {
          outline: "none",
          fill: isHighlighted
            ? "rgba(255,255,255,0.18)"
            : "#d5cdc3",
          stroke: isHighlighted
            ? "rgba(20,20,20,0.6)"
            : "#a8a099",
          strokeWidth: isHighlighted ? 1.0 : 0.5,
          cursor: "pointer",
          filter: isHighlighted
            ? "drop-shadow(0 0 3px rgba(0,0,0,0.15))"
            : "none",
        },
        pressed: {
          outline: "none",
        },
      }}
    />
  );
});

export default function WorldMap() {
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);
  const isDragging = useRef(false);

  // Zoom/pan state
  const [position, setPosition] = useState<{
    coordinates: [number, number];
    zoom: number;
  }>({
    coordinates: [0, 0],
    zoom: 1,
  });

  const highlightedSet = useMemo(
    () => new Set(HIGHLIGHTED_COUNTRIES),
    []
  );

  // Tooltip handlers — track mouse position directly from Geography events
  const handleMouseEnter = useCallback(
    (name: string, e: React.MouseEvent) => {
      if (isDragging.current) return;
      setTooltip({ name, x: e.clientX, y: e.clientY });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  // Zoom controls
  const handleMoveStart = useCallback(() => {
    isDragging.current = true;
    setTooltip(null);
  }, []);

  const handleMoveEnd = useCallback(
    (pos: { coordinates: [number, number]; zoom: number }) => {
      setPosition(pos);
      isDragging.current = false;
    },
    []
  );

  const handleZoomIn = useCallback(() => {
    setPosition((prev) => ({
      ...prev,
      zoom: Math.min(prev.zoom * 1.6, 10),
    }));
  }, []);

  const handleZoomOut = useCallback(() => {
    setPosition((prev) => ({
      ...prev,
      zoom: Math.max(prev.zoom / 1.6, 1),
    }));
  }, []);

  const handleReset = useCallback(() => {
    setPosition({ coordinates: [0, 0], zoom: 1 });
  }, []);

  return (
    <motion.div
      className="relative w-full select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-[100] pointer-events-none px-3 py-1.5 rounded-md bg-foreground/90 text-background text-[11px] font-medium tracking-wide shadow-lg"
          style={{
            left: tooltip.x + 12,
            top: tooltip.y - 28,
          }}
        >
          {tooltip.name}
        </div>
      )}

      {/* Zoom controls */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 flex flex-col gap-1">
        <button
          onClick={handleZoomIn}
          className="w-8 h-8 rounded-lg bg-foreground/80 hover:bg-foreground backdrop-blur-md flex items-center justify-center text-background transition-all shadow-md"
          aria-label="Zoom in"
        >
          <Plus size={14} strokeWidth={2.5} />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-8 h-8 rounded-lg bg-foreground/80 hover:bg-foreground backdrop-blur-md flex items-center justify-center text-background transition-all shadow-md"
          aria-label="Zoom out"
        >
          <Minus size={14} strokeWidth={2.5} />
        </button>
        {position.zoom > 1.05 && (
          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-lg bg-foreground/80 hover:bg-foreground backdrop-blur-md flex items-center justify-center text-background transition-all shadow-md mt-1"
            aria-label="Reset zoom"
          >
            <RotateCcw size={12} strokeWidth={2.5} />
          </button>
        )}
      </div>

      <ComposableMap
        projection="geoEquirectangular"
        projectionConfig={PROJECTION_CONFIG}
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <defs>
          {/* Terrain color enhancement */}
          <filter id="terrainEnhance" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                0.90 0.02 0.02  0  0.00
                0.03 1.22 0.05  0  0.02
                0.02 0.08 0.92  0  0.03
                0    0    0     1  0
              "
            />
            <feComponentTransfer>
              <feFuncR type="gamma" amplitude={1.05} exponent={0.92} offset={0} />
              <feFuncG type="gamma" amplitude={1.1} exponent={0.88} offset={0} />
              <feFuncB type="gamma" amplitude={1.0} exponent={0.95} offset={0} />
            </feComponentTransfer>
            <feColorMatrix type="saturate" values="1.3" />
          </filter>

          {/* Ocean gradient — very subtle variation */}
          <linearGradient id="oceanGrad" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#b0cfe0" />
            <stop offset="35%" stopColor="#bed8e8" />
            <stop offset="65%" stopColor="#b4d1e2" />
            <stop offset="100%" stopColor="#aecde0" />
          </linearGradient>

          {/* Mask: terrain only visible through highlighted countries */}
          <mask id="terrainMask">
            <rect x={0} y={0} width={MAP_WIDTH} height={MAP_HEIGHT} fill="black" />
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => {
                    const name = geo.properties?.name || "";
                    return name !== "Antarctica" && highlightedSet.has(name);
                  })
                  .map((geo) => (
                    <Geography
                      key={`mask-${geo.rsmKey}`}
                      geography={geo}
                      fill="white"
                      stroke="white"
                      strokeWidth={0.3}
                      style={MASK_STYLE}
                      tabIndex={-1}
                    />
                  ))
              }
            </Geographies>
          </mask>
        </defs>

        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveStart={handleMoveStart}
          onMoveEnd={handleMoveEnd}
          minZoom={1}
          maxZoom={10}
          filterZoomEvent={() => true}
        >
          {/* Layer 1: Soft blue ocean with subtle gradient */}
          <rect
            x={-MAP_WIDTH}
            y={-MAP_HEIGHT}
            width={MAP_WIDTH * 3}
            height={MAP_HEIGHT * 3}
            fill="url(#oceanGrad)"
            pointerEvents="none"
          />

          {/* Layer 2: Hi-res terrain image — MASKED to highlighted countries */}
          <g mask="url(#terrainMask)" style={{ pointerEvents: "none" }}>
            <image
              href="/map/terrain.jpg"
              x={IMG_X}
              y={IMG_Y}
              width={IMG_W}
              height={IMG_H}
              preserveAspectRatio="none"
              filter="url(#terrainEnhance)"
              decoding="async"
              pointerEvents="none"
            />
          </g>

          {/* Layer 3: Subtle graticule */}
          <g pointerEvents="none">
            <Graticule stroke="rgba(0,0,0,0.03)" strokeWidth={0.1} />
          </g>

          {/* Layer 4: Country geographies */}
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties?.name || "";
                if (name === "Antarctica") return null;
                const isHighlighted = highlightedSet.has(name);
                return (
                  <MemoGeography
                    key={geo.rsmKey}
                    geo={geo}
                    isHighlighted={isHighlighted}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </motion.div>
  );
}
