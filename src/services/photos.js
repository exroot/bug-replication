import axios from "axios";

export const getPhotos = async () => {
  const URL = process.env.NEXT_PUBLIC_UNSPLASH_API;
  const clientId = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const page = 1;
  const perPage = 10;
  try {
    const { data } = await axios.get(
      `${URL}photos/?client_id=${clientId}&page=${page}&per_page=${perPage}`
    );
    return data;
  } catch (err) {
    console.error("ERROR at getPhotos: ", err);
  }
};
