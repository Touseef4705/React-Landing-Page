function Feature({feature}){
    return(
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          Feautures
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {feature.map((data)=>(
          <div key={data.id} className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <img src={data.icon} alt="" className='rounded-full' />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {data.title}
              </h2>
              <p className="leading-relaxed text-base">
                {data.description}
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
    )
}

export default Feature