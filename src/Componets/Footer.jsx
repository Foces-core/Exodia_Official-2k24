import logo from '../assets/logo.svg';
function Footer() {
  return (
    <div>
 

<footer className="bg-[#151515] rounded-lg shadow ">
    <div className="w-full p-4 mx-auto max-w-screen-2xl md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://www.exodiacec.online/" className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
                <img src={logo} className="h-8" alt="exodia Logo" />
                <span className="self-center text-2xl text-white theme">Exodia</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                {/* <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li> */}
                <li>
                    <a className="hover:underline me-4 md:me-6">Licensing - MIT License</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/15c-x6SaknEtLrM652VvFwvSVSflWCbr0/view?usp=drivesdk" className="hover:underline">Terms & Conditions</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Exodia™. All Rights Reserved.</span>
    </div>
</footer>



    </div>
  )
}

export default Footer
