import React from 'react';

export default function Text (props){

    return (
        <div>
            <h3>Prodi : {props.data.prodi}</h3>
            <h2>Angkatan : {props.data.angkatan}</h2>
            <h1>Nama : {props.data.nama}</h1>
        </div>
    )

}