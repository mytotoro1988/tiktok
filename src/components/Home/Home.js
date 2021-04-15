
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { Grid } from '@mycv/mycv-grid'

import HomeContainer from '../../containers/Home'
import HeaderComponent from '../Header'

function Home() {
    return (
        <Router>
            <Grid>
                <HeaderComponent />

                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                </Switch>
            </Grid>
        </Router>
    )
}

export default Home