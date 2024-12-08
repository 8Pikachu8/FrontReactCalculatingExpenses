import Block from './Block'
import BlockButtons from './BlockButtons'
import BlockTable from './BlockTable'
import './Statistics.css'

const Statistics = () => {
	return (
		<div className='statistics'>
			<BlockTable />
			<Block />
			<BlockButtons/>
		</div>
	)
}

export default Statistics
