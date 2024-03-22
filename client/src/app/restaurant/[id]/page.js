import React from "react";
import MainPage from "./MainPage";
import { cookies } from "next/headers";
import { refreshAccessToken } from "@/app/utils/refreshAccessToken";

async function getRestaurantData(id) {
  "use server";

  const res = await fetch(
    `https://capstone-room-5.onrender.com/v1/restaurants/${id}`,
  );
  const data = await res.json();
  return data;
}

async function getUserCart() {
  "use server";

  const res = await fetch(`https://capstone-room-5.onrender.com/v1/cart`, {
    method: "GET",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await getUserCart(); // Recursively call the function with the new token
  }

  return data;
}

async function deleteUserCart() {
  "use server";

  const res = await fetch(`https://capstone-room-5.onrender.com/v1/cart`, {
    method: "DELETE",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await deleteUserCart(); // Recursively call the function with the new token
  }

  return data;
}

async function upsertCart(fields) {
  "use server";
  const res = await fetch(`https://capstone-room-5.onrender.com/v1/cart`, {
    method: "PATCH",
    headers: {
      Cookie: cookies().toString(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });
  const data = await res.json();

  if (data?.error?.message === "jwt expired") {
    await refreshAccessToken();
    return await upsertCart(fields); // Recursively call the function with the new token
  }

  return data;
}

const singleRestaurantPage = () => {
  return (
    <MainPage
      getRestaurantData={getRestaurantData}
      getUserCart={getUserCart}
      upsertCart={upsertCart}
      deleteUserCart={deleteUserCart}
    />
  );
};

export default singleRestaurantPage;
