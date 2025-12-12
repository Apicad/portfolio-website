// Preload critical assets for better performance
export const preloadSplineScenes = () => {
  const scenes = [
    "https://prod.spline.design/xI6bQZSWJDbXKxvS/scene.splinecode", // MiniHouse
    "https://prod.spline.design/5CQfMSoMpTvytXvJ/scene.splinecode", // ComponentBox
  ];

  scenes.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "fetch";
    link.href = url;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};

// Preload images
export const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};
