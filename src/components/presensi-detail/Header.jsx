import { QrCode, ScanQrCode } from "lucide-react";
import React, { useEffect, useState } from "react";
import Modal from "../modals/Modal";
import { QRCodeCanvas } from "qrcode.react";
import useMediaQuery from "@/hooks/useMediaQuery";
import QRScanner from "./QRScanner";

const Header = ({ role, qrData }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [isOpen, setIsOpen] = useState(false);
  const [isScanOpen, setIsScanOpen] = useState(false);
  const size = isMobile ? 200 : 400;

  useEffect(() => {}, []);

  return (
    <div className="w-full flex my-3 gap-2 items-center">
      <h1 className="w-[70%] sm:w-[90%] ml-20 sm:ml-36 text-xl sm:text-3xl text-center break-words">
        Detail Presensi
      </h1>
      <div className="w-[30%] sm:w-[10%] flex items-center justify-end mx-2">
        {role === "maha" ? (
          <>
            <button
              className="flex items-center justify-center h-12 w-12 sm:h-20 sm:w-20 border border-border rounded-lg hover:bg-slate-100"
              type="button"
              onClick={() => setIsOpen(true)}>
              <QrCode className="h-8 w-8 sm:h-10 sm:w-10" />
              <span className="sr-only">QR Code Generate</span>
            </button>

            {/* Modal Generate QR Code */}
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              className={"w-3/4"}>
              <div className="flex items-center justify-center">
                <QRCodeCanvas value={"testing"} size={size} />
              </div>
            </Modal>
          </>
        ) : (
          <>
            <button
              className="flex items-center justify-center h-12 w-12 sm:h-20 sm:w-20 border border-border rounded-lg hover:bg-slate-100"
              onClick={() => setIsScanOpen(true)}
              type="button">
              <ScanQrCode className="h-8 w-8 sm:h-10 sm:w-10" />
              <span className="sr-only">Scan QR Code</span>
            </button>

            {/* Scan QR Code */}
            <Modal
              isOpen={isScanOpen}
              onClose={() => setIsScanOpen(false)}
              className={"w-full bg-transparent border-0 shadow-none"}>
              <QRScanner
                onResult={(data) => {
                  alert(`hasil scan ${data}`);
                  setIsScanOpen(false);
                }}
              />
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
