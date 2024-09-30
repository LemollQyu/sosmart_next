"use server"

import { cookies } from "next/headers"

type token = {
    access_token : string,
    expires_in: number,
    refresh_token: string,
    token_type: string
}

export default async function saveToken(token: token) {
    const exp = 7200;
    cookies().set('acces-token', token.access_token, {maxAge: exp});
    cookies().set('refresh-token', token.refresh_token, {maxAge: exp});
} 