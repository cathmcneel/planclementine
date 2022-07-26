import React, {useState} from 'react';
import SingleTeamMember from '../Team/index';

function Home () {

    const [team, setteam] = useState([
        {name: 'Catherine McNeel',
        title: 'Co-Founder',
        description: 'I wanted to help women save time and celebrate more!',
        image: '../../assets/img/catherine-headshot.jpg'
        },
        {name: 'Abbi Larkin',
        title: 'Co-Founder',
        description: 'I am passionate about dogs and blueberries',
        image: '../../assets/img/abbi-headshot.jpg'
        },

    ])
    const vendors = [
        {
            name: 'Dat Dog',
            description: '"This was the perfect food for my 7 year olds birthday!" -Jill',
            image: ""
        },
        {
            name: 'Creole Creamery',
            description: 'Ice cream for any occasion!',
            image: ""
        },
        {
            name: 'Flower Shop',
            description: '"The most stunning florals and great customer service" -Melissa',
            image: ""
        },
    ]

    return (
        <>

            <div className="team-cards">
                <h1 className="meet-team"> meet our team. </h1>
                <div className="team-cards">
                    {team.map((team) => (
                        <SingleTeamMember
                            name={team.name}
                            title={team.title}
                            description={team.description}
                            image={team.image}
                        />
                    ))}
                </div>
                
            </div>
        </>
    )

};

export default Home;