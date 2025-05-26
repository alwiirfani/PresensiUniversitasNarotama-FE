import React, { useState } from "react";
import { useZxing } from "react-zxing";

const QRScanner = ({ onResult }) => {
  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      const text = result.getText();
      setResult(text);
      onResult?.(text);
    },
    onError(error) {
      console.error("Error scanning QR code:", error);
    },
  });

  return (
    <div className="relative w-full flex flex-col items-center">
      <video ref={ref} className="rounded-xl w-full h-auto" />

      {/* Overlay Scan Box */}
      <div className="absolute w-2/3 aspect-square top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* 4 corner borders */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-white rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-white rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-white rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-white rounded-br-2xl" />
      </div>

      <p className="mt-2 text-sm text-gray-600">
        {result || "Arahkan kamera ke QR Code"}
      </p>
    </div>
  );
};

export default QRScanner;
