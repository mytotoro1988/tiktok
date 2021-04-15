
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { Grid } from '@mycv/mycv-grid'

import HomeContainer from '../../containers/Home'
import PostDetailContainer from '../../containers/PostDetail'
import HeaderComponent from '../../components/Header'
import config from '../../config'

function App() {
    return (
        <Router>
            <Grid>
                <HeaderComponent />
                <Grid type="wide" maxWidth={config.mainWidth}>
                    <Switch>
                        <Route exact path={config.routes.home} component={HomeContainer} />
                        <Route exact path={config.routes.postDetail} component={PostDetailContainer} />
                        {/* route + switch sẽ quyết định sự render ở mỗi route, hay, muốn sang màn nào thì nhảy vào  config thêm đường
                        Dẫn rồi import vào đây file trong containers của nó lên đây rồi bắn ra theo click của path phía dưới thôi */}
                        {/* Path của HomeContainer được lấy từ config.routes.home thay vì Hard code (code cứng).
                        Sử dụng file config để tránh lặp lại một dữ liệu trong ứng dụng. Thay vì hard code một 
                        số dữ liệu có tính chất "Có thể thay đổi trong tương lai" vào luôn trong code thì ta đưa 
                        ra file config. Trong tương lai khi cần thay đổi ta chỉ cần update trong file config là xong. */}
                    </Switch>
                </Grid>
            </Grid>
        </Router>
    )
}

export default App