import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Home() {
  return (
    <Container fluid className='text-center'>
      <Row>
        <div className='col-12' style={{ padding: "1em" }}>
          <h1>¿Quienes Somos?</h1>
          <p> Somos una empresa lider en nuestro en el ramo de subastas, nos enorgullecemos de tener un amplia cartera de clientes leales,
            llevamos mas de 5 años ayudando a los vendedores a llegar a mas gente para que puedan obtener ganancias mayores a las esperadas con nuestro sistema de
            subastas.
          </p>
        </div>
        <div className='col-6' style={{ padding: "1em" }}>
          <h1>Misión</h1>
          <p>
            Proveer servicios comerciales y financieros de manera integral, eficiente, transparente y altamente automatizados.
            Atender a nuestros clientes con la calidad y excelencia que nos gustaría que nos atendieran a nosotros.
          </p>
        </div>
        <div className='col-6' style={{ padding: "1em" }}>
          <h1>Visión</h1>
          <p>
            Aportar al desarrollo de México a través de la formación de un grupo de empresas que se caractericen por la innovación en servicios de excelencia.
            Posicionar a la empresa Subast Supreme como el principal proveedor en servicios de subastas y empeños a nivel nacional e incursionar en el mercado internacional.
          </p>
        </div>
      </Row>
    </Container>
  )
}

export default Home