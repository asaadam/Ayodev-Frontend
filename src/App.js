import React, { useState } from 'react';
import Button from './component/Button';
import Text from './component/ListMahasiswa';

let dataFromBackend =
  [
    {
      nama: "Adam",
      angkatan: "2017",
      prodi: "Teknik Informatika"
    },
    {
      nama: "Matahari",
      angkatan: "2016",
      prodi: "Teknik Informatika"
    },
    {
      nama: "Alya",
      angkatan: "2017",
      prodi: "Sistem Informasi"
    },
    {
      nama: "Verrel",
      angkatan: "2017",
      prodi: "Teknik Informatika"
    }
  ]


function App() {

  let [counter, setCounter] = useState(0);
  return (
    <div className="App" style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1>{counter}</h1>
      <Button onClick={(data) => {
        setCounter(counter + data);
      }} />
      <Button onClick={(data) => {
        setCounter(counter + data);
      }} type />
      {dataFromBackend.map((dataFromArray) => (
        <Text data={dataFromArray} key={dataFromArray.nama}/>
      )
      

      )}
    </div>
  );
}

export default App;
