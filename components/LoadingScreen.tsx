"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const LETTERS = ["N", "B", "P", "K", "O", "R", "E", "A"];
const LINE_DURATION = 500;    // 0~500ms: orange line draws
const LETTER_START = 500;     // 500ms: letters start revealing
const LETTER_INTERVAL = 220;  // 220ms per letter → all done at ~2.3s
const MIN_TOTAL_MS = 3000;    // minimum 3 seconds before exit

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [lineVisible, setLineVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const pageReadyRef = useRef(false);
  const minTimeRef = useRef(false);
  const animDoneRef = useRef(false);

  const tryComplete = useCallback(() => {
    if (pageReadyRef.current && minTimeRef.current && animDoneRef.current) {
      setIsExiting(true);
      setTimeout(onComplete, 600);
    }
  }, [onComplete]);

  // Gate 1: page fully loaded
  useEffect(() => {
    const markReady = () => {
      pageReadyRef.current = true;
      tryComplete();
    };
    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady, { once: true });
      return () => window.removeEventListener("load", markReady);
    }
  }, [tryComplete]);

  // Animation sequence + Gate 2 (minTime) + Gate 3 (animDone)
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Step 1: draw baseline line immediately
    timers.push(setTimeout(() => setLineVisible(true), 0));

    // Step 2: reveal letters one by one starting at 500ms
    LETTERS.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleCount(i + 1), LETTER_START + LETTER_INTERVAL * i)
      );
    });

    // Step 3: animDone after all letters are visible (~2.3s)
    const animDoneAt = LETTER_START + LETTER_INTERVAL * LETTERS.length;
    timers.push(
      setTimeout(() => {
        animDoneRef.current = true;
        tryComplete();
      }, animDoneAt)
    );

    // Gate 2: minimum 3s total
    timers.push(
      setTimeout(() => {
        minTimeRef.current = true;
        tryComplete();
      }, MIN_TOTAL_MS)
    );

    return () => timers.forEach(clearTimeout);
  }, [tryComplete]);

  const handleSkip = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onComplete, 600);
  }, [isExiting, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#fefefe] transition-opacity duration-600 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="inline-flex flex-col items-stretch">
        {/* Letters — overflow:hidden per letter so translateY clips cleanly */}
        <div
          className="flex notranslate"
          translate="no"
          style={{ letterSpacing: "0.06em" }}
        >
          {LETTERS.map((letter, i) => (
            <div key={i} style={{ overflow: "hidden", display: "inline-block" }}>
              <span
                className="text-5xl md:text-7xl font-bold text-[#2d2a28] inline-block notranslate"
                translate="no"
                style={{
                  transform: i < visibleCount ? "translateY(0)" : "translateY(110%)",
                  transition:
                    i < visibleCount
                      ? "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
                      : "none",
                }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        {/* Baseline orange line — draws left→right before letters appear */}
        <div
          style={{
            height: "3px",
            background: "#C05010",
            transformOrigin: "left",
            transform: lineVisible ? "scaleX(1)" : "scaleX(0)",
            transition: lineVisible
              ? `transform ${LINE_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
            marginTop: "6px",
          }}
        />
      </div>

      {/* Skip button — bottom-right, orange background */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 flex items-center gap-2 px-5 py-3 bg-[#C05010] text-white text-sm font-medium rounded-sm hover:bg-[#a04010] transition-colors duration-200"
        aria-label="인트로 건너뛰기"
      >
        <span>건너뛰기</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
