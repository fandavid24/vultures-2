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
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-red-500 py-6 sm:py-12">
                <div className="max-w-screen-2xl mx-auto py-4">
                <h2 className="font-bold text-center text-6xl text-slate-700">
                    &lt;3
                </h2>
                <div className="flex flex-row flex-wrap gap-6 mt-20">
                    <div className="flex flex-wrap bg-white w-1/5 shadow rounded-2xl overflow-hidden">
                        <img src="us/img4.jpg" alt="" className="object-cover h-auto w-full"/>
                        <div className="p-3 justify-center h-15">
                            <div className="flex mt-0 gap-2 items-center font-extralight italic">
                            11/21/2023
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap bg-white w-1/5 shadow rounded-2xl overflow-hidden">
                        <img src="us/img2.jpg" alt="" className="object-cover h-auto w-full"/>
                        <div className="p-3 justify-center h-15">
                            <div className="flex mt-0 gap-2 items-center font-extralight italic">
                            12/16/2023
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap bg-white w-1/5 shadow rounded-2xl overflow-hidden">
                        <img src="us/img3.jpg" alt="" className="object-cover h-auto w-full"/>
                        <div className="p-3 justify-center h-15">
                            <div className="flex mt-0 gap-2 items-center font-extralight italic">
                            dec/24/2023
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap bg-white w-1/5 shadow rounded-2xl overflow-hidden">
                        <img src="us/img1.jpg" alt="" className="object-cover h-auto w-full"/>
                        <div className="p-3 justify-center h-15">
                            <div className="flex mt-0 gap-2 items-center font-extralight italic">
                            dec/25/2023
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </main>
    );
  }