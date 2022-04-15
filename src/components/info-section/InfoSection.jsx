import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Container } from '../../GlobalStyles'
import Card from '../coins/Card'
import { 
  InfoContainer, 
  InfoRow, 
  InfoColumn, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle, 
  ImgWrapper,
  Img,
} from './Section.styles'

export const InfoSection = ({ lightBg, imgStart, lightTextDesc, lightTopLine, lightText, heading, primary, description, buttonLabel, topLine, img}) => {

  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

  useEffect(() => {
     axios.get(url)
      .then((res) => {
          setData(res.data) 
      })
      .catch((error) => console.log(error));

  }, [data]);

  console.log(data)
  if (!data) return null;

  return (
    <>
      <InfoContainer lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{heading}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/coins'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              {img ? (
                <ImgWrapper>
                  <Img src={img} alt="" />
                </ImgWrapper>
              ) : (
                <ImgWrapper>
                  {data.map(data => (
                    <Card data={data} key={data.id} />
                  ))}
                </ImgWrapper>
              )}
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoContainer> 
    </>
  )
}
