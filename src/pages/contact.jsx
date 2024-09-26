
export default () => {
    const contactMethods = [
        
    ];

    return (
        <main className="py-14 bg-sky-300">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 ">
                <div className="max-w-xl mx-auto gap-12 justify-between lg:flex lg:max-w-none ">
                    <div className="max-w-lg space-y-3 mt-36 ">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">Contact us</p>
                        <p>s simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever
                            since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to
                            make a type specimen book</p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {contactMethods.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-x-3">
                                        <div className="flex-none text-gray-400">{item.icon}</div>
                                        <p>{item.contact}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 border-2 bg-white px-14 py-7 w-4/5 mx-auto">
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">


                            <h1 className="text-3xl">We’d love to hear from you!
                                Lets get in touch</h1>


                            <div className="flex flex-col sm:flex-row sm:space-x-6">





                                <div className="flex-1">
                                    <label className="font-medium">Full name</label>
                                    <input type="text" required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-red-500 focus:border-red-700 outline-none shadow-sm rounded-lg sm:text-base lg:text-lg" />
                                </div>
                                <div className="flex-1">
                                    <label className="font-medium">Email</label>
                                    <input type="email" required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-red-500 focus:border-red-700 outline-none shadow-sm rounded-lg sm:text-base lg:text-lg" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:space-x-6">
                                <div className="flex-1">
                                    <label className="font-medium">Company</label>
                                    <input type="text" required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-red-500 focus:border-red-700 outline-none shadow-sm rounded-lg sm:text-base lg:text-lg" />
                                </div>
                                <div className="flex-1">
                                    <label className="font-medium">Phone</label>
                                    <input type="text" required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-red-500 focus:border-red-700 outline-none shadow-sm rounded-lg sm:text-base lg:text-lg" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="font-medium">Website</label>
                                <input type="text" required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border border-red-500 focus:border-red-700 outline-none shadow-sm rounded-lg sm:text-base lg:text-lg" />
                            </div>
                            <div>
                                <label className="font-medium">Message</label>
                                <textarea required className="w-full mt-2 h-36 px-3  resize-none appearance-none bg-transparent border border-red-500 focus:border-red-700 outline-none shadow-sm rounded-lg sm:text-base lg:text-lg"></textarea>
                            </div>
                            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};


