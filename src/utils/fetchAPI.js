export const fetchImages = async () => {
  let randomNum = Math.floor(Math.random() * 20);
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${randomNum}&limit=30`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
