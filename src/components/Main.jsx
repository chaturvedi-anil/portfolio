import React from 'react'
import { experienceDetails, projectDetails } from '../utils';
import ExperienceCard from './Cards/ExperienceCard';
import ProjectCard from './Cards/ProjectCard';

const Main = () => {
    const aboutAnchor = 'font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300';
    
    const BackgroundDiv = ({headingText}) => (
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
                    <ol className=" group/list">
                        {experienceDetails.map((experience) => (
                            <ExperienceCard key={experience.headingText} experience={experience}/>
                        ))}
                    </ol>

                    <div className="mt-12">
                        <a 
                            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base' 
                            href="/" target='_blank' rel='noreferrer noopener'
                            aria-label='View Full Resume'
                        >
                            <span className='inline-block'>
                                View Full Resume
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            </span>
                        </a>
                    </div>
                </div>

            </section>  

            <section id="projects" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label='Projects'>
                <BackgroundDiv headingText={"Projects"} />

                <div>
                    <ul className='group/list'>
                        {/* <li className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://replatform.dev" target="_blank" rel="noreferrer noopener" aria-label="Replatform (opens in a new tab)">
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span className="inline-block">Replatform.dev
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                            </span>
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">
                                        RePlatform simplifies Kubernetes deployment, config management, and incident handling. Enjoy real-time monitoring, customizable alerts, and a user-friendly interface to streamline workflows and boost efficiency. Focus on building, we handle the rest.
                                    </p>
                                </div>
                                        
                                <img
                                    alt="Replatform homepage"
                                    loading="lazy"
                                    width="200"
                                    height="48"
                                    decoding="async"
                                    className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                    style={{ color: 'transparent' }}
                                    srcSet={`
                                        ${replatformImg} 200w,
                                        ${replatformImg} 400w,
                                        ${replatformImg} 800w
                                    `}
                                    sizes="(max-width: 600px) 200px, 
                                            (max-width: 1200px) 400px, 
                                            800px"
                                    src={replatformImg}
                                />


                            </div>
                        </li> */}

                        {projectDetails.map((projectDetail) => (
                            <ProjectCard key={projectDetail.projectName} projectDetail={projectDetail} />
                        ) )}
                    </ul>
                </div>
            </section>

        
        </main>
    )
}


export default Main
