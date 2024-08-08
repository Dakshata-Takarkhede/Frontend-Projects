import '../../App.css'
import { useDogData } from '../../Context/DogDataContext';
import Dog from '../Dog'
import Container from '../container/Container';

function Home() {
  
const {dogInfo} = useDogData(); 
  
//   console.log(dogInfo);
  
  return (
      <>    
      <Container>
        {dogInfo.length === 0 ? (
          <p>Data is loading...</p>
          ) : (
            dogInfo?.map((dog) => (
              <Dog key={dog.id} DogData={dog} id={dog.id} />
            ))
          )
        }
      </Container>
      </>
  )
}

export default Home; 
