
const Overview = () => {
    return (
        <div className={styles.container}>
            <h1>{ user.name }</h1>
            <h3>{ user.email }</h3>
            <FireStoreWrite/>
            <FireStoreRead/>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Overview
