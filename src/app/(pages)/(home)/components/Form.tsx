"use client";
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";

export default function Form() {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [alert, setAlert] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    // Handle adding files
    const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);

            // Validate file and limit size to 20MB
            const maxFileSize = 20 * 1024 * 1024;
            const isValid = newFiles.every((file) => file.size <= maxFileSize);

            if (!isValid) {
                setError("file-size");
                return;
            }

            setError(null);
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    // Handle removing files
    const handleFileRemove = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

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

        if (!isChecked) {
            setError("checkbox");
            return false;
        }

        setError(null);
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
            // Upload files to Vercel Blob
            const fileUploads = await Promise.all(
                files.map(async (file) => {
                    const newBlob: PutBlobResult = await upload(
                        file.name,
                        file,
                        {
                            access: "public",
                            handleUploadUrl: "/api/upload",
                        }
                    );

                    // Return the Vercel Blob URL
                    return newBlob.url;
                })
            );

            // Remove file inputs from FormData
            formData.delete("attachments");

            // Append file URLs to form data
            fileUploads.forEach((url) => formData.append("fileUrls", url));

            const response = await fetch("/api/nodemailer", {
                method: "post",
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                form.reset();
                setFiles([]);
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
                <label
                    htmlFor="attachments"
                    className="text-sm text-charcoal font-medium"
                >
                    Прикрепите медицинские документы, если имеются (заключения,
                    описания МРТ, выписки)
                </label>
                <input
                    id="attachments"
                    name="attachments"
                    type="file"
                    multiple
                    accept=".pdf, .png, .jpg, .jpeg"
                    className="hidden"
                    onChange={(e) => handleFileAdd(e)}
                />
                <button
                    type="button"
                    className="mt-2 mb-1 text-center text-charcoal cursor-pointer h-11 w-full bg-accent/70 border border-dashed border-accent rounded-lg transition-colors hover:border-primary hover:bg-accent"
                    onClick={() =>
                        document.getElementById("attachments")?.click()
                    }
                >
                    Загрузить файлы
                </button>
                <p
                    className={`${
                        error === "file-size" ? "text-red-500" : "text-gray-500"
                    } text-sm`}
                >
                    Макс. 20MB. Форматы: PDF, JPG, JPEG, PNG.
                </p>
                {files.map((file, index) => (
                    <div
                        key={index}
                        className="mt-2 text-sm text-gray-700 flex items-center"
                    >
                        <span className="mr-2">{file.name}</span>
                        <button
                            type="button"
                            onClick={() => handleFileRemove(index)}
                            className="text-red-600 underline"
                        >
                            Удалить
                        </button>
                    </div>
                ))}
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
                <div className="flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        id="agreement"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="cursor-pointer size-5 accent-accent"
                    />
                    <label
                        htmlFor="agreement"
                        className="cursor-pointer select-none text-sm"
                    >
                        Я согласен с политикой конфиденциальности
                    </label>
                </div>
                {error === "checkbox" && (
                    <p className="text-red-600 text-sm mt-2">
                        Вы должны согласиться с нашей политикой
                        конфиденциальности.
                    </p>
                )}
            </div>
            <div>
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 inline-flex items-center gap-x-2 rounded-md bg-accent px-6 py-3 text-base font-semibold text-charcoal shadow-sm transition-colors duration-300 hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
