import React from 'react';

const ExperienceCard = ({experience}) => {
    const {headingText, positionName, companyName, companyLink, workDescription, technologies } = experience;

    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label={headingText}> 
                    {headingText} 
                </header>

                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                            <a 
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"  
                                href={companyLink}                                                                                                       target="_blank" rel="noreferrer noopener"                                                                                     aria-label={` ${positionName} at ${companyName}(opens in a new tab)`}
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{positionName} -&nbsp;
                                    <span className="inline-block">
                                        {companyName}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipule="evenodd"></path></svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </h3>

                    <p className="mt-2 text-sm leading-normal">
                        {workDescription}
                    </p>

                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {technologies?.map((technology) => (
                            <li className="mr-1.5 mt-2" key={technology}>
                                <div 
                                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                                >
                                    {technology}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </li>
    )
}

export default ExperienceCard