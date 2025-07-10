export default function FAQSection() {
    return (
        <>
            {' '}
            <div className="bg-[#F4F4F4]   bg-cover bg-center xl:h-auto pb-[80px]">
                <div className="flex items-center  w-full ">
                    <div className="flex flex-col mt-[120px] w-full">
                        <h1 className="text-5xl text-center ">FAQs</h1>
                        <div className=" mt-8 grid  divide-y divide-neutral-200  w-full px-60">
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span className="font-semibold text-xl">
                                            Question A
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shape-rendering="geometricPrecision"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-black text-base">
                                        Answer A
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span className="font-semibold text-xl">
                                            Question B
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shape-rendering="geometricPrecision"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-black text-base">
                                        Answer B
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span className="font-semibold text-xl">
                                            Question C
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shape-rendering="geometricPrecision"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-black text-base">
                                        Answer C
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span className="font-semibold text-xl">
                                            Question D
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shape-rendering="geometricPrecision"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-black text-base">
                                        Answer D
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
