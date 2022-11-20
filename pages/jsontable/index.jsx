import React from 'react'
import JsonData from './data.json'

function JsonDataDisplay() {
	return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {
            JsonData.map(
              (info) => {
                return (
                  <tr key={info.id}>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                  </tr>
                )
              }
            )


          }
        </tbody>
      </table>

    </div>
  )
}

export default JsonDataDisplay;
