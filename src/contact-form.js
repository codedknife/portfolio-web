'use client';

import React from 'react';

export default function ContactFooter() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("SENDING...");
    const formData = new FormData(event.target);

    formData.append("access_key", "227d982e-39d8-4d91-aa0e-68ed2185f2b5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("FORM SUBMITTED SUCCESSFULLY.");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "SOMETHING WENT WRONG.");
      }
    } catch (error) {
      console.error(error);
      setResult("NETWORK ERROR. PLEASE TRY AGAIN.");
    }
  };

  return (
    <>
    <div className="w-full overflow-hidden leading-none relative">

        <svg
            className="w-full h-16 md:h-24 lg:h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            fill="#f5f5f5"
            d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
        </svg>

        </div>
            <footer id="footer" className="bg-[#f5f5f5] pt-10 pb-5 px-5 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h2 className="text-[4rem] md:text-[7.5rem] font-bold">CONTACT ME</h2>
                    <div className="flex flex-row gap-10">
                        <a href="https://github.com/codedknife" className="underline-link text-lg">
                            <p className="text-2xl">↗ GitHub</p>
                        </a>

                        <a href="https://www.linkedin.com/in/ash-tran/" className="underline-link text-lg">
                            <p className="text-2xl">↗ Linkedin</p>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center w-full mt-5 md:mt-0">
                    <form onSubmit={onSubmit} className="max-w-sm flex flex-col gap-4 w-full">
                    <input
                        type="text"
                        name="name"
                        placeholder="NAME"
                        required
                        className="p-3 border border-[#66615C] focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="EMAIL"
                        required
                        className="p-3 border border-[#66615C] focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="MESSAGE"
                        required
                        rows={4}
                        className="p-3 border border-[#66615C] focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-[#66615C] text-white font-bold py-3"
                    >
                        SEND
                    </button>
                    {result && (
                        <p className="mt-4 text-[#66615C] font-semibold">{result}</p>
                    )}
                    </form>
                </div>
                </div>
                <div className="mt-5 md:-mt-10 mb-10">
                        <p>DEVELOPED AND DESIGNED BY <span className="font-semibold">ASHLEY TRAN</span>.</p>
                    </div>
            </footer>
    </>
  );
}