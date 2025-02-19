import CinemaIcon from 'assets/cinema.svg';

const NotFoundMessage = ({ children }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div><CinemaIcon /></div>
            <h3>{children}</h3>
        </div>
    )
}

export default NotFoundMessage;