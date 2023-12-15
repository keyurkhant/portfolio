const Loader = ({ fadeOut }: any) => {
    return (
        <div id="loading" className={`loader ${fadeOut ? 'fade-out' : ''}`}>
            <div id="spinner"></div>
        </div>
    )
}

export default Loader;