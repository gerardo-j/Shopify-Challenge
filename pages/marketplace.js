import Marketplace from '../components/Marketplace'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    const data = await res.json()

    return {
        props: {
            albumn: data
        }
    }
}

const marketplace = ({ albumn }) => {
    return (
        <Marketplace albumn={albumn}/>
    )
}

export default marketplace
