import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Universitas Narotama"; // Default title

    // Menyesuaikan title berdasarkan path
    if (location.pathname === "/login") {
      title = "Login - Universitas Narotama";
    } else if (location.pathname === "/") {
      title = "Home - Universitas Narotama";
    } else {
      title = "Universitas Narotama"; // Default fallback title
    }

    // Mengubah title di browser
    document.title = title;
  }, [location]); // Update title saat location berubah

  return null;
};

export default TitleManager;
