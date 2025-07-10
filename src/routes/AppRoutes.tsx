import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import LandingPage from '../pages/LandingPage'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<LandingPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
