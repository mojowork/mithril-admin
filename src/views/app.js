
const App = {
	view: () => (
	<main style={{marginTop:'60px'}}>
			<img src={require('../assets/logo.png')}/>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>name</th>
						<th>genre</th>
						<th>release date</th>
					</tr>
				</thead>
				<tbody>
					<tr className="active">
						<td>The Shawshank Redemption</td>
						<td>Crime, Drama</td>
						<td>14 October 1994</td>
					</tr>
					<tr >
						<td>The Shawshank Redemption</td>
						<td>Crime, Drama</td>
						<td>14 October 1994</td>
					</tr>
					<tr >
						<td>The Shawshank Redemption</td>
						<td>Crime, Drama</td>
						<td>14 October 1994</td>
					</tr>
				</tbody>
			</table>
	</main>
	)
}

export default App