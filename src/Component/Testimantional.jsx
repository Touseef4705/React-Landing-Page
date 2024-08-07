function Testimantion({testimonial}){
    return(
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          Testimantional
        </h1>
        <div className="flex flex-wrap justify-center -m-4">
          {/* {console.log(testimonial)} */}
          {testimonial.map((data)=>(
          <div key={data.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={data.image}
              />
              <p className="leading-relaxed">
                {data.feedback}
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                {data.name}
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </section>
    )
}

export default Testimantion