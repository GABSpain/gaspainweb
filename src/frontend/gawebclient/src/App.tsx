import { SiteRouter } from './routes/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <SiteRouter />
      </BrowserRouter>
    </>
  )
}

export default App
