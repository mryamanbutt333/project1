import React from 'react'
import Heading from './Heading'
import Card from './Card'

// Sample data array
const data = [
    {
        id: 0,
        title: "Fast Relief Medicine",
        desc: "Medicine is the science and practice of diagnosing, treating, and preventing illness to maintain and restore health.",
        img: "/project-1.png",
        tags: ["supplement"],
    },
    {
        id: 1,
        title: "Care First Pharmacy",
        desc: "A medical store is a retail outlet that sells medications, health supplies, and medical equipment to the public.",
        img: "/project-2.png",
        tags: ["Safe Medicines Here"],
    },
    {
        id: 2,
        title: "Complete Health Store",
        desc: "Medicine is the field focused on diagnosing, treating, and preventing health issues, while a medical store provides medications, health supplies, and equipment.",
        img: "/project-3.png",
        tags: ["treatment"],
    },
    {
        id: 3,
        title: "Cough & Cold Syrups",
        desc: "A syrup is a liquid medication made with a sugar-based solution, used to deliver medicinal ingredients in an easy-to-consume form.",
        img: "/project-4.png",
        tags: ["sugar free"],
    },
    {
        id: 4,
        title: "Life-Saving Solutions",
        desc: "Medicine is the science of diagnosing, treating, and preventing diseases to improve and maintain health.",
        img: "/project-5.png",
        tags: ["diagnoses"],
    },
    {
        id: 5,
        title: "Trusted Medications",
        desc: "A patient is an individual receiving medical care or treatment for an illness, injury, or health condition.",
        img: "/project-6.png",
        tags: ["treatment"],
    },
    {
        id: 6,
        title: "Relief in Every Tablet",
        desc: "A tablet is a solid, compressed form of medication designed for easy swallowing and controlled dosage.",
        img: "/project-7.png",
        tags: ["tablet"],
    },
]

// Define the component
const Medicine = () => {
    return (
        <div id='medicine' className='container pt-32'>
            <Heading title="My Medicine" />

            <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (
                    <Card 
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        img={el.img}
                        tags={el.tags}
                    />
                ))}
            </div>
        </div>
    )
}

export default Medicine
