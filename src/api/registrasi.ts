import axios from "axios";

type RegisterType = {
    name: string,
    email: string,
    phone: string,
    password: string,
    password_confirmation: string
}

export default async function PostRegistrasi ({name, phone, email, password, password_confirmation}: RegisterType ) {

    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/v1/register`,
        {
            username: name,
            phone: phone,
            email: email,
            password: password,
            password_confirmation: password_confirmation

        }

        
    )

    return response
}