import { useForm } from "react-hook-form"
import { useForm as useFormSpree } from "@formspree/react"
import { useEffect } from "react"

type FormData = {
    name: string
    email: string
    location: string
    phone: string
    summary: string
}

export default function useContactForm() {
    const {
        reset,
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>()

    const [state, handleFormspreeSubmit] = useFormSpree("xrbkakjq")

    useEffect(() => {
        if (state.succeeded) reset()
    }, [state.succeeded, reset])

    const name = watch("name")

    const capitalizeName = (value: string) =>
        value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())

    const onSubmit = async (data: FormData) => {
        const cleanedData = {
            ...data,
            name: capitalizeName(data.name),
            location: capitalizeName(data.location),
        }

        if (state.succeeded) reset()

        await handleFormspreeSubmit(cleanedData)
    }

    return {
        register,
        handleSubmit,
        onSubmit,
        setValue,
        errors,
        name,
        state,
    }
}
