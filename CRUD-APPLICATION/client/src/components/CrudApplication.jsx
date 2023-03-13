import { Box, Typography, styled } from '@mui/material';

import Mern from '../Assets/Images/Mern.png';
import CRUD from '../Assets/Images/CRUD.png';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const Title = styled(Typography)`
    text-align: center;
    font-weight: bold;
`

const CrudApplication = () => {
  return (
    <Header>
            <Title variant="h5">Crud Application - MERN Stack</Title>
            <Box style={{display: 'flex'}}>
                <Image style={{marginTop: 70}} src={CRUD} />
                <Image src={Mern} />
            </Box>
        </Header>
  )
}

export default CrudApplication