import React, { useEffect } from "react";
import './SplineViewer.css';


const SplineViewer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.33/build/spline-viewer.js";
    document.body.appendChild(script);

    const removeBranding = () => {
      const splineViewer = document.querySelector('spline-viewer');
      if (splineViewer) {
        const branding = splineViewer.shadowRoot.querySelector('a');
        if (branding) {
          branding.remove();
        }
      }
    };

    const timeoutId = setTimeout(removeBranding, 1000);

    return () => {
      document.body.removeChild(script);
      clearTimeout(timeoutId);
    };
  }, []);

    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <spline-viewer
      className="robot-3d"
      url="https://prod.spline.design/A12tvgPuALL0fg1f/scene.splinecode"
      style={{
        width: "100%",       
        height: "100vh",      
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    />
  );
};

export default SplineViewer;