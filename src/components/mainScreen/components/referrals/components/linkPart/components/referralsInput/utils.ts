const BASE_URL = "https://api.jsonbin.io/v3/b/6481f1378e4aa6225eab2c5d";

export const postEmail = async (string: string) => {
  const response = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key":
        "$2b$10$bjU9GrTy90tfJWS1k4UZBuFSjOU3rEn5GkEiH6aNUBcDWG5ScvD5C",
    },
    body: JSON.stringify({ email: string }),
  });
  if (!response.ok) {
    throw new Error("Failed to put email");
  }
};
