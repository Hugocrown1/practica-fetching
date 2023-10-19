export const fetchInfo = async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
};

export const getProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) throw new Error("No se pudo adquirir el dato");

  return response.json();
};
