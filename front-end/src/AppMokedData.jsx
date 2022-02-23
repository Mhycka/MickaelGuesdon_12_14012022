import './App.scss'
import Dashboard from './Pages/Dashboard'
import Layout from './Components/LayoutMoked'
import DashboardContextProvider from './Utils/fetchMoked'

function App() {
    return (
        <DashboardContextProvider>
            <Layout>
                <Dashboard />
            </Layout>
        </DashboardContextProvider>
    )
}

export default App