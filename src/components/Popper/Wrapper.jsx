import './Wrapper.scss'

function Wrapper({children}) {
    return <div className='wrapper-popper'>
        {children}
    </div>
}

export default Wrapper;