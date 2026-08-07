import { WHATSAPP_URL } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nikhil on WhatsApp"
      className="group fixed right-4 bottom-24 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-105 md:bottom-6"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-white" aria-hidden="true">
        <path d="M16.003 3.2c-7.06 0-12.79 5.73-12.793 12.79 0 2.257.59 4.46 1.712 6.402L3.2 28.8l6.573-1.703a12.78 12.78 0 0 0 6.226 1.586h.005c7.058 0 12.79-5.73 12.793-12.79a12.71 12.71 0 0 0-3.744-9.05 12.71 12.71 0 0 0-9.05-3.744Zm0 23.29h-.004a10.62 10.62 0 0 1-5.41-1.482l-.389-.23-4.02 1.042 1.073-3.92-.253-.403a10.6 10.6 0 0 1-1.626-5.667c.002-5.867 4.776-10.64 10.643-10.64a10.57 10.57 0 0 1 7.523 3.12 10.57 10.57 0 0 1 3.113 7.527c-.003 5.867-4.777 10.64-10.65 10.64Zm5.837-7.968c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16s-.826 1.04-1.013 1.253c-.187.214-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.593-1.895-1.78-2.215-.186-.32-.02-.493.14-.652.144-.144.32-.374.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.523-.539-.72-.549l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.46 4.824.763.33 1.358.526 1.822.673.766.244 1.463.21 2.014.127.614-.092 1.892-.773 2.158-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium whitespace-nowrap text-foreground shadow-md group-hover:block">
        Chat with Nikhil on WhatsApp
      </span>
    </a>
  );
}
