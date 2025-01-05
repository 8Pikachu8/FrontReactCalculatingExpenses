import Block from './Block'
import BlockButtons from './BlockButtons'
import BlockTable from './TableElement/BlockTable'
import statisticCSS from  './Statistics.module.css'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

const Statistics = (props) => {
	return (
		<div className={statisticCSS.statistics}>
			<div style={{ display: 'block'  }}>
			<BlockTable />
			<Block Price='123' Type='Продукт' />
			<Block Price='555' Type='Продукт' />
			<Block Price='346' Type='Деталь' />
			<BlockButtons />
			</div>
		</div>
	)
}


export default compose(withAuthRedirect)(Statistics)