import './Home.css';
import NavigationBar from '../../components/navbar/navbar';
import Intro from './intro/intro';
import Dropdown from './dropdown/dropdown'
import Testimonial from './testimonials/testimonials';
import Footer from '../../components/footer/footer'
import Cards from '../../components/cards/cards';
import { useEffect, useState } from 'react';
import useApi from '../../helpers/useApi';
import { Col, Row } from 'react-bootstrap';


function App() {
  const api = useApi()
  const [popular, setPopular] = useState([])

  const getPopular = async () => {
    try {
      const {data} = await api.requests({
        method:'GET',
        url:'/popular/'
      })
      setPopular(data.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPopular()
  },[])

  return (
    <div> 
      <NavigationBar/>
      <div className='myBG'>
      <Intro/>
      <Dropdown/>
      </div>
      <section>
      <div className='container'>
      <Row>
        <Col className='sm-6'>
        <div className='populartxtstyle'>Popular in Town</div>
        </Col>
      </Row>
      <Row>
        {popular.map((v) => {
            return (
                <Cards
                id={v.id}
                picture={v.image}
                name={v.name}
                location={v.location}
                />
              )
        })}
      </Row>
      </div>
    </section>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App;
