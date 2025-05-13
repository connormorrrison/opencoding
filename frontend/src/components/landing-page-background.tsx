"use client";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./landing-page-background.module.css";

export default function LandingPageBackground({ children }: PropsWithChildren<{}>) {
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const pathRef3 = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    // Initialize animation for first path (main line)
    const path1 = pathRef1.current;
    if (path1) {
      const length1 = path1.getTotalLength();
      path1.style.setProperty("--len", `${length1}`);
      path1.style.strokeDasharray = `${length1}`;
      path1.style.strokeDashoffset = `${length1}`;
      const seconds1 = length1 / 600; // Medium speed
      path1.style.animation = `${styles.drawFlow} ${seconds1}s linear infinite`;
    }
    
    // Initialize animation for second path (slower, more volatile)
    const path2 = pathRef2.current;
    if (path2) {
      const length2 = path2.getTotalLength();
      path2.style.setProperty("--len", `${length2}`);
      path2.style.strokeDasharray = `${length2}`;
      path2.style.strokeDashoffset = `${length2}`;
      const seconds2 = length2 / 500; // Faster speed
      path2.style.animation = `${styles.drawFlow} ${seconds2}s linear infinite`;
    }
    
    // Initialize animation for third path (slower, steadier uptrend)
    const path3 = pathRef3.current;
    if (path3) {
      const length3 = path3.getTotalLength();
      path3.style.setProperty("--len", `${length3}`);
      path3.style.strokeDasharray = `${length3}`;
      path3.style.strokeDashoffset = `${length3}`;
      const seconds3 = length3 / 400; // Slower speed
      path3.style.animation = `${styles.drawFlow} ${seconds3}s linear infinite`;
    }
  }, []);
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className={styles.wrapper} aria-hidden="true">
        <svg
          className={styles.canvas}
          viewBox="0 0 6000 480"
          preserveAspectRatio="none"
        >
          {/* Main curve - moderate volatility with uptrend */}
          <path
            ref={pathRef1}
            className={`${styles.path} ${styles.pathPrimary}`}
            d="M0 320
               C300 200 600 200 900 320
               S1500 440 1800 320
               S2400 200 2700 320
               S3300 440 3600 320
               S4200 200 4500 270
               S5100 400 5400 250
               S6000 150 6300 100"
          />
          
          {/* Second curve - more volatile with steeper uptrend */}
          <path
            ref={pathRef2}
            className={`${styles.path} ${styles.pathSecondary}`}
            d="M0 380
               C200 350 400 420 600 300
               S1000 340 1200 260
               S1600 360 1800 220
               S2200 280 2400 190
               S2800 260 3000 150
               S3400 230 3600 120
               S4000 180 4500 80"
          />
          
          {/* Third curve – more undulation while keeping the up-trend */}
          <path
            ref={pathRef3}
            className={`${styles.path} ${styles.pathTertiary}`}
            d={`M0 400
                C300 380 600 330 900 350
                S1200 390 1500 340
                S1800 290 2100 310
                S2400 350 2700 300
                S3000 250 3300 270
                S3600 310 3900 260
                S4200 210 4500 230
                S4800 270 5100 220
                S5400 170 5700 190
                S6000 210 6000 210`}
          />
        </svg>
      </div>
      {children}
    </div>
  );
}