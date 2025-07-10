import JoinNowSection from '@/components/JoinNowSection'

export default function PrizeSection() {
    return (
        <>
            <div className="bg-white flex  items-center justify-center pt-[120px] pb-[80px]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-5xl ">PRIZES</h1>
                    <div className="flex mt-32 gap-x-5 xl:flex-row flex-col gap-5">
                        <div className="bg-[#F4F4F4] py-11 px-40 flex flex-col items-center justify-center">
                            <img
                                src="/prize/medal-01.png"
                                alt="1st Place Medal"
                            />
                            <p className="text-4xl font-bold mt-8">$1000</p>
                            <p className="text-xl w-[157px] text-center mt-12">
                                Cras dapibus & Cras dapibus
                            </p>
                        </div>{' '}
                        <div className="bg-[#F4F4F4] py-11 px-40 flex flex-col items-center justify-center">
                            <img
                                src="/prize/medal-01.png"
                                alt="1st Place Medal"
                            />
                            <p className="text-4xl font-bold mt-8">$1000</p>
                            <p className="text-xl w-[157px] text-center mt-12">
                                Cras dapibus
                            </p>
                        </div>{' '}
                        <div className="bg-[#F4F4F4] py-11 px-40 flex flex-col items-center justify-center">
                            <img
                                src="/prize/medal-01.png"
                                alt="1st Place Medal"
                            />
                            <p className="text-4xl font-bold mt-8">$1000</p>
                            <p className="text-xl w-[157px] text-center mt-12">
                                Cras dapibus
                            </p>
                        </div>
                    </div>
                    <JoinNowSection />
                </div>
            </div>
        </>
    )
}
