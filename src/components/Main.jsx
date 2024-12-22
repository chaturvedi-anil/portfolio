import React from 'react'

const Main = () => {
    const aboutAnchor = 'font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300';

    const BackgroundDiv = (headingText) => (
        <div 
            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{headingText}</h2>
        </div>
    )
    return (
        <main id="content" className='pt-24 lg:w-[52%] lg:py-24'>
            <section id="about" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label='About me'>
                <BackgroundDiv headingText={'About'} />
                <div>
                    <p className='mb-4'>
                        I’m a seasoned platform engineer and leader passionate about solving infrastructure challenges with a product-driven mindset. My expertise lies in building scalable, high-availability systems and enhancing developer productivity through automation, cost optimization, and robust internal tools.
                    </p>
                    
                    <p className="mb-4">
                        Currently, I’m a Senior Engineering Manager at &nbsp;
                        
                        <a 
                            className={aboutAnchor} href="https://www.pinelabs.com/" target="_blank" rel="noreferrer noopener" aria-label="Pine Labs (opens in a new tab)"
                        >Pine Labs</a>
                        , I oversee infrastructure platforms managing 600+ microservices, handling 5-6 million daily card transactions, and driving initiatives that reduce costs by 30%. With a deep understanding of distributed systems, I’ve architected multi-country Active-Active Disaster Recovery (DR) solutions and optimized observability stacks ingesting 3 TB of daily logs.
                    </p>

                    <p className="mb-4">
                        Previously, I’ve worked as a Principal Engineer at &nbsp;
                        <a 
                            className={aboutAnchor} href="https://finaxar.com/" target="_blank" rel="noreferrer noopener" aria-label="Finaxar(opens in a new tab)"
                        >Finaxar</a>
                        , Engineering Manager at Vedantu, and held key roles at &nbsp;
                        <a 
                            className={aboutAnchor} href="https://www.gojek.io/" target="_blank" rel="noreferrer noopener" aria-label="Gojek (opens in a new tab)"
                        >Gojek</a>
                        , where I led projects ranging from fraud prevention systems handling 10M transactions daily to organization-wide monitoring platforms saving 10x in costs. My hands-on experience spans technologies like 
                        
                        &nbsp;
                        <a 
                            className={aboutAnchor} href="https://kubernetes.io/" target="_blank" rel="noreferrer noopener" aria-label="Kubernetes (opens in a new tab)"
                        >Kubernetes</a>, 
                        &nbsp;
                        <a 
                            className={aboutAnchor} href="https://go.dev/" target="_blank" rel="noreferrer noopener" aria-label="Golang (opens in a new tab)"
                        >Golang</a>,
                        &nbsp;
                        <a 
                            className={aboutAnchor} href="https://rubyonrails.org/" target="_blank" rel="noreferrer noopener" aria-label="Ruby on Rails (opens in a new tab)"
                        >Ruby on Rails</a>,
                        &nbsp;
                        <a 
                            className={aboutAnchor} href="https://kafka.apache.org/" target="_blank" rel="noreferrer noopener" aria-label="Kafka (opens in a new tab)"
                        >Kafka</a>,
                        &nbsp;
                        <a 
                            className={aboutAnchor} href="https://www.postgresql.org/" target="_blank" rel="noreferrer noopener" aria-label="PostgreSQL (opens in a new tab)"
                        >PostgreSQL</a>,
                        &nbsp;
                        <a 
                            className={aboutAnchor} href="https://www.terraform.io/" target="_blank" rel="noreferrer noopener" aria-label="Terraform (opens in a new tab)"
                        >Terraform</a>, and
                        &nbsp;
                        <a 
                            className={aboutAnchor} href="https://redis.io/" target="_blank" rel="noreferrer noopener" aria-label="Redis (opens in a new tab)"
                        >Redis</a>,
                         alongside managerial skills in team building and stakeholder management.
                    </p>
                    <p className="mb-4">
                        I thrive at the intersection of engineering and leadership, building teams and platforms that empower developers while delivering measurable business impact. Outside of work, I enjoy exploring new technologies, mentoring, and contributing to the tech community.
                    </p>
                </div>
                
            </section>

            <section id="experience" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label='Work experience'>
                <BackgroundDiv headingText={'Experience'} />
                <div>
                    <ol className="group">
                        <li className="mb-12">
                            
                        </li>
                    </ol>
                </div>
            </section>  
        </main>
    )
}

export default Main
