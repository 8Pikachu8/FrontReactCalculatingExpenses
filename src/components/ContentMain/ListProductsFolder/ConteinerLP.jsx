
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import ListProducts from './ListProducts'
import { connect } from "react-redux";


const mapStateToProps = (state) =>{
    return {
        store: state.UpdateProductPage,
    }
}



export default compose(connect(mapStateToProps),withAuthRedirect)(ListProducts)