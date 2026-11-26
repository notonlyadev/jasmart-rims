import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { products } from './data/data.js'
import ProductTable from "./components/ProductTable.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductTable products={products} />
  </StrictMode>,
)
