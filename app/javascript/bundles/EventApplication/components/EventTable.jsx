import PropTypes from 'prop-types';
import React from 'react';

class EventTable extends React.Component {
  render() {
      return(
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col-md-3">Name</th>
              <th className="col-md-2">Date</th>
              <th className="col-md-3">Place</th>
              <th className="col-md-4">Description</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      )
    }
  };

export default EventTable;