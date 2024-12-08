import Block from './Block'
import BlockButtons from './BlockButtons'
import BlockTable from './TableElement/BlockTable'
import './Statistics.css'

const Statistics = () => {
	return (
		<div className='statistics'>
			<BlockTable />
			<Block Price='123' Type='Продукт' />
			<Block Price='555' Type='Продукт' />
			<Block Price='346' Type='Деталь' />
			<BlockButtons />
		</div>
	)
}

export default Statistics
