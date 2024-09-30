import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";


type LoginType = {
    account: string,
    password: string,
}

export default async function postLogin ({account, password}: LoginType ) {

    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/login`,
        {
            account: account,
            password: password,
        }
    )

    return response
}