export default function FeatureSection() {
    return (
        <div className="bg-[#F4F4F4]   bg-cover bg-center xl:h-auto">
            <div className="flex items-center justify-center ">
                <div className="flex flex-col mt-[120px] relative">
                    <h1 className="text-5xl text-center ">Quisque rutrum</h1>
                    <img
                        src="/feature/app.png"
                        alt=""
                        className="mt-20 w-[628px] hidden lg:block"
                    />
                    <div className=" xl:place-content-around  grid-cols-2 grid xl:absolute relative  xl:w-screen h-full xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:left-1/2 xl:top-1/2 p-10  place-items-center">
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src="/feature/account 1.png"
                                alt=""
                                className="aspect-square w-[100px]"
                            />
                            <p className="text-gray-600 w-[178px] text-center">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit{' '}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src="/feature/start.png"
                                alt=""
                                className="aspect-square w-[100px]"
                            />
                            <p className="text-gray-600 w-[178px] text-center">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit{' '}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src="/feature/cash.png"
                                alt=""
                                className="aspect-square w-[100px]"
                            />
                            <p className="text-gray-600 w-[178px] text-center">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit{' '}
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src="/feature/account 1.png"
                                alt=""
                                className="aspect-square w-[100px]"
                            />
                            <p className="text-gray-600 w-[178px] text-center">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
