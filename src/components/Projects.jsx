import React from "react";
import newsAggregator from '../assets/newsAggregator.jpg'
import hrAnalysis from '../assets/hrAnalysis.png'
import ecommerce from '../assets/ecommerce.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title === 'News Aggregator' && (
                <a href="/newsaggregator">
                    <img className="w-full rounded-t-lg h-auto object-cover " src={newsAggregator} alt="News Aggregator" />
                </a>
            )}
            {title === 'HR Data Analysis' && (
                <a href="/HRdlys">
                    <img className="w-full rounded-t-lg h-auto object-cover " src={hrAnalysis} alt="HR Data Analysis" />
                </a>
            )}
            {title === 'E-commerce Website' && (
                <a href="/ecommerce">
                    <img className="w-full rounded-t-lg h-auto object-cover " src={ecommerce} alt="E-commerce Website" />
                </a>
            )}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export const project = [
    {
        title: 'News Aggregator',
        description: 'A full-stack news aggregation platform where users can post, upvote, downvote, and comment on news articles.',
        image: newsAggregator,
        git: 'https://github.com/Smeet23/News-Aggregator',
        technologies: ['Ejs', 'NodeJS', 'MongoDB', 'ExpressJS','Mongoose','JWT']
    },
    {
        title: 'HR Data Analysis',
        description: 'Performed EDA on HR datasets to uncover key factors influencing employee attrition and performance.',
        image: hrAnalysis,
        git: 'https://github.com/yourusername/hr-data-analysis',
        technologies: ['Python', 'Pandas', 'Seaborn', 'Numpy','MatplotLib']
    },
    {
        title: 'E-commerce Website',
        description: 'Developed a scalable e-commerce website with user authentication, Blogs, Product Search and Tracker.',
        image: ecommerce,
        git: 'https://github.com/Smeet23/Ecommerce-Django',
        technologies: ['Html','Css', 'Django', 'SqLite', '   Python']
    }
];

export default Projects;
