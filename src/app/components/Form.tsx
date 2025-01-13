"use client";
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";

export default function Form() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [alert, setAlert] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    // Form Validation
    const validateFields = (formData: FormData): boolean => {
        const requiredFields = ["name", "email", "phone", "message"];

        for (const field of requiredFields) {
            const value = formData.get(field)?.toString().trim();
            if (!value) {
                setError(field);
                return false;
            }

            if (
                field === "email" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ) {
                setError("email-regex");
                return false;
            }
        }

        return true;
    };

    // Form Submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Validate fields
        if (!validateFields(formData)) {
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/nodemailer", {
                method: "post",
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                form.reset();
                setAlert({
                    message: "Отправленное сообщение",
                    type: "success",
                });
            } else {
                console.error("Server Error:", result.message);
                setAlert({
                    message: "Пожалуйста, попробуйте позже",
                    type: "error",
                });
            }
        } catch (error) {
            console.error("Client Error:", error);
            setAlert({
                message: "Пожалуйста, попробуйте позже",
                type: "error",
            });
        } finally {
            setLoading(false);
            setTimeout(() => setAlert(null), 3000);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6"
            noValidate
        >
            <div>
                <label htmlFor="name" className="sr-only">
                    Имя
                </label>
                <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Имя"
                    autoComplete="name"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm outline-accent focus:border-primary focus:ring-primary"
                />
                {error === "name" && (
                    <p className="text-red-600 text-sm mt-2">
                        Это поле является обязательным
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="email" className="sr-only">
                    Почта
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Почта"
                    autoComplete="email"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm outline-accent focus:border-primary focus:ring-primary"
                />
                {error === "email" && (
                    <p className="text-red-600 text-sm mt-2">
                        Это поле является обязательным
                    </p>
                )}
                {error === "email-regex" && (
                    <p className="text-red-600 text-sm mt-2">
                        Введите действительный адрес почты
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="phone" className="sr-only">
                    Телефон
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Телефон"
                    autoComplete="tel"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm outline-accent focus:border-primary focus:ring-primary"
                />
                {error === "phone" && (
                    <p className="text-red-600 text-sm mt-2">
                        Это поле является обязательным
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="message" className="sr-only">
                    Сообщение
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Сообщение"
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm outline-accent focus:border-primary focus:ring-primary"
                    defaultValue={""}
                />
                {error === "message" && (
                    <p className="text-red-600 text-sm mt-2">
                        Это поле является обязательным
                    </p>
                )}
            </div>
            <div>
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-10 inline-flex items-center gap-x-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-charcoal shadow-sm transition-colors duration-300 hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    {loading ? "Загрузка..." : "Отправить"}
                </button>
            </div>
            <div>
                {alert && (
                    <div
                        className={`w-fit flex items-center gap-x-2 mt-4 px-6 py-3 rounded-md text-white ${
                            alert.type === "success"
                                ? "bg-green-500"
                                : "bg-red-500"
                        }`}
                    >
                        {alert.type === "success" ? (
                            <CheckCircleIcon
                                aria-hidden="true"
                                className="size-6"
                            />
                        ) : (
                            <ExclamationCircleIcon
                                aria-hidden="true"
                                className="size-6"
                            />
                        )}
                        {alert.message}
                    </div>
                )}
            </div>
        </form>
    );
}
