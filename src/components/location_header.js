import icon from '../assets/icon.png';

const Activite = () => {
    return (
        <div className='user-info mx-8'>
            <h1 className='text-3xl font-medium'>Bonjour Odile !</h1>
            <div className='flex flex-row my-4 actual-location-info justify-between	'>
                <div className='flex flex-col'>
                    <p className='actual-location-info text-[#4F4F4F] text-xl'>Localisation actuelle</p>
                    <div className='flex flex-row items-center actual-location-info'>
                        <img className="w-8" src={icon} alt="image icon" />
                        <span className='leading-none text-lg'>Place de la Bourse, 75002 Pa...</span>
                    </div>                    
                </div>
                <div className='bg-white px-4 py-2 rounded-lg flex items-center'>
                <svg class="w-[32px] h-[32px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
            </div>
        </div>
    )
};
  
export default Activite;