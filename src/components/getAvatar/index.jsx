import getAvatar from '../../images/homePage/getAvatar.png'

const GetAvatar = () => {
    return (
        <div style={{ width: '100%' }}>
            <img
                priority
                src={getAvatar}
                className=""
                style={{ display: 'block', width: '1700px', height: '385px' }}
                alt="getAvatar"
            />


        </div>
    )
}

export default GetAvatar;