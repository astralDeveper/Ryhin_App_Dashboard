import Container from '../../Components/Container'
import Ratingcards from './Components/Ratingcards'

const  Dashboard = () => {
  return (
    <Container mainStyle={"h-full"} name="Dashboard" >
        <div className={`max-w-screen-2xl mx-auto p-6`}  >
          <Ratingcards/>
        </div>
    </Container>
  )
}

export default Dashboard