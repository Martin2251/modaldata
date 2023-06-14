import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

const Table = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    };

    fetchData();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
     
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button onClick={() => openModal(item)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <Modal isOpen={true} closeModal={closeModal} data={selectedItem} />
      )}
    </div>
  );
};

export default Table;
