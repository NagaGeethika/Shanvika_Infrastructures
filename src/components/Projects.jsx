import React from 'react';

const Projects = () => {
    const projectsData = [
        {
            name: 'Shanvika Residency',
            category: 'Residential',
            description: 'A modern apartment complex offering comfortable living spaces and amenities.',
            image:"/Residency.jpg"
        },
        {
            name: 'Shanvika Nilayam',
            category: 'Residential',
            description: 'A custom-built individual house designed for luxury and comfort.',
            image: '/house.jpg'
        },
        {
            name: 'Shanvika Plaza',
            category: 'Commercial',
            description: 'A state-of-the-art commercial complex with retail and office spaces.',
            image: '/p3.jpg'
        },
        {
            name: 'Shanvika Office Interiors',
            category: 'Interior',
            description: 'Modern and ergonomic interior design for a corporate office space.',
            image: '/ofc.jpg'
        },
        {
            name: 'Shanvika Industrial Hub',
            category: 'Industrial',
            description: 'A robust industrial facility designed for efficiency and durability.',
            image: '/ind.jpg'
        },
        {
            name: 'Shanvika Home Renovation',
            category: 'Renovation',
            description: 'Complete home renovation transforming an old house into a contemporary home.',
            image: '/ren.jpg'
        },
    ];

    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden project-card">
                            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">Category: {project.category}</p>
                                <p className="text-gray-700">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;