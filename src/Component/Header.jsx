
function Header({header}){
    return (
        <header className="text-gray-600 body-font bg-black">
      <div className="container navbar mx-auto flex p-5  md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={header.logo} alt="" className='h-12 w-12 rounded-lg'/>
        </a>
        <nav className="nav-links md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-gray-900">First Link</a> */}
          {header.navLinks.map((data)=>(

          <a key={data.id} className="mr-5 hover:text-blue-900 text-white" href={data.link} >{data.title}</a>
          ))}
          {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        <i class="fa-solid fa-bars"></i>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  ">
          Log In
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
    )
}

export default Header;