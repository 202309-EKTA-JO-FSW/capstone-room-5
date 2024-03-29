"use server";

import { cookies } from "next/headers";

export async function refreshAccessToken() {
  const res = await fetch(
    "https://capstone-room-5.onrender.com/v1/refreshToken",
    {
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    },
  );

  const data = await res.json();
  if (data.successful) {
    cookies().set("accessToken", data.accessToken, { httpOnly: true });
    return data.accessToken;
  }
}
