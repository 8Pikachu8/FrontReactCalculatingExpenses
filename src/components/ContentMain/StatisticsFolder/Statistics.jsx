import Block from './Block'
import BlockButtons from './BlockButtons'
import BlockTable from './TableElement/BlockTable'
import statisticCSS from  './Statistics.module.css'

const Statistics = () => {
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

export default Statistics
