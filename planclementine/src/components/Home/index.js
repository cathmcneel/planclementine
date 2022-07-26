import React, {useState} from 'react';
import SingleTeamMember from '../Team/index';
import Vendor from '../vendors/index'

function Home () {

    const [team, setteam] = useState([
        {name: 'Catherine McNeel',
        title: 'Co-Founder',
        description: 'I wanted to help women save time and celebrate more!',
        img: '../../assets/img/catherine-headshot.jpg'
        },
        {name: 'Abbi Larkin',
        title: 'Co-Founder',
        description: 'I am passionate about dogs and blueberries',
        img: '../../assets/img/abbi-headshot.jpg'
        },

    ])
    const vendor = [
        {
            name: 'Dat Dog',
            description: 'This was the perfect food for my 7 year olds birthday! -Jill',
            img: "datdog"
        },
        {
            name: 'Creole Creamery',
            description: 'Ice cream for any occasion!',
            img: "cake"
        },
        {
            name: 'Flower Shop',
            description: 'The most stunning florals and great customer service" -Melissa',
            img: "flowers"
        },
    ]

    return (
        <>
        <div className="VendorHome">
            <h1>Featured Vendors</h1>
            <div className="">
                {vendor.map((vendor) => (
            <Vendor
            name={vendor.name}
            description={vendor.description}
            img={vendor.img}
            />
            ))}
        </div>
        </div>

            <div className="team-cards">
                <h1 className="meet-team"> meet our team. </h1>
                <div className="team-cards">
                    {team.map((team) => (
                        <SingleTeamMember
                            name={team.name}
                            title={team.title}
                            description={team.description}
                            img={team.img}
                        />
                    ))}
                </div>
                
            </div>
        </>
    )

};

export default Home;