import React from 'react';
import { useSelector } from 'react-redux';
import { History } from '../../store/history/types';

const selectHistory = (state: History) => state.items;

const HistoryPage: React.FC<any> = () => {
    const historyItems = useSelector(selectHistory);

    return (
        <div className='history-container'>
            {historyItems.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    {historyItems.map((item,i) =>
                    <tbody key={''+item+i}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>{item.country}</td>
                        </tr>
                    </tbody>
                    )}
                </table>) :
                <h2>Search history is empty...</h2>
            }
        </div>
    );
  }
  
  export default HistoryPage;