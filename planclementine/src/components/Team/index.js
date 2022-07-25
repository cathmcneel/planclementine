import react from 'react';

const SingleTeamMember = ( {name, title, description, img } ) => {

    return (
        <div id="team-cards">
        <div  id="individual-member" className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div  className="flex flex-col items-center pb-10">
            <h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {name}</h1>
            <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            <div>
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" id="singleMemberImg" src={`../../src/assets/img/${img}.jpg`} alt={`${name} headshot`}></img>
                </div>
        </div>
        </div>
        </div>


    )
};

export default SingleTeamMember;