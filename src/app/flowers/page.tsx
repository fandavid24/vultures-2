import React from 'react'

export default function Page() {
    return(
        <main>
            <div className="bg-red-500 flex gap-6">
                <a href=''>
                <button type="button" className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                    <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Back</span>
                </button>
                </a>
            </div>
            <div className="mx-auto px-0 p-4 bg-red-500 w-full min-h-screen">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg"
                    src="/flowers/rose.png"
                    alt=""
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg"
                    src="/flowers/rose2.png"
                    alt=""
                    />
                </div>
                </div>
                <div className="grid gap-4">
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg"
                    src="/flowers/rose2.png"
                    alt=""
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg"
                    src="/flowers/rose.png"
                    alt=""
                    />
                </div>
                </div>
                <div className="grid gap-4">
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg"
                    src="/flowers/rose.png"
                    alt=""
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg"
                    src="/flowers/rose2.png"
                    alt=""
                    />
                </div>
                </div>
                <div className="grid gap-4">
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg"
                    src="/flowers/rose2.png"
                    alt=""
                    />
                </div>
                <div>
                    <img
                    className="h-auto max-w-full rounded-lg"
                    src="/flowers/rose.png"
                    alt=""
                    />
                </div>
                </div>
            </div>
            </div>
        </main>
    );
  }