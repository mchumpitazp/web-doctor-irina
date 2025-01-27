"use client";

export default function DownloadButton() {
    const handleDownload = () => {
        const fileUrl = "/pdf/vestibular_rehabilitation.pdf"; // Replace with the actual file name
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "комплекс_упражнений.pdf"; // File name for the downloaded file
        link.click();
    };

    return (
        <button
            onClick={handleDownload}
            className="ms-8 px-4 py-2 rounded-xl text-neutral text-sm font-medium tracking-wide transition-colors duration-300 bg-primary hover:bg-accent hover:text-charcoal"
        >
            Скачать файл
        </button>
    );
}
