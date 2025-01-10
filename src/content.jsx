import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import ContentPage from '@/content/content'

const root = document.createElement('div')
root.id = '__just_random_container'
document.body.append(root)

createRoot(root).render(
  <StrictMode>
    <ContentPage />
  </StrictMode>
)