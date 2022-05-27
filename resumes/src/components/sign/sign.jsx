import React, { useEffect, useRef, useState } from "react";
import styles from "./sign.module.css";
const Sign = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.5;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2.5;
    contextRef.current = context;

    setCtx(context);
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };

  const handleReset = () => {
    if (ctx && startDrawing) {
      ctx.clearRect(0, 0, window.innerWidth * 0.5, window.innerHeight);
    }
  };

  return (
    <div>
      <div className={styles.canvasWrap}>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={drawing}
          onMouseLeave={finishDrawing}
        ></canvas>
      </div>
      <button onClick={handleReset}>clear</button>
    </div>
  );
};

export default Sign;
