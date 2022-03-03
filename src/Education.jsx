import React from 'react';

function Education () {
  return (
    <div >
    <h2>Education</h2>
      <table style={{width: '100%', border: '2px'}}>
        <tbody>
          <tr>
            <th>Degree</th>
            <th>year</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>Bsc-It</td>
            <td>2018-2021</td>
            <td>9.1 SGPA</td>
          </tr>
          <tr>
            <td>Msc-It</td>
            <td>2021-2023</td>
            <td>Running</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default Education;
