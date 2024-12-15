
import ListProducts from './ListProducts'
import { connect } from "react-redux";


const mapStateToProps = (state) =>{
    return {
        store: state.UpdateProductPage,
    }
}


const ConteinerLP = connect(mapStateToProps)(ListProducts)

export default ConteinerLP;