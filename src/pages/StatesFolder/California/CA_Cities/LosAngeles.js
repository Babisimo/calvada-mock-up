import React from 'react'

function LosAngeles() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>LA</button>
            <div className='dropdown-content'>
                <a href='https://eng2.lacity.org/techdocs/benchmarks/control.cfm?action=search_by&frames=2' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='http://zimas.lacity.org/' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://navigatela.lacity.org/navigatela/' target={'_blank'} rel='noreferrer'>Navigate LA</a>
            </div>
        </div>
    )
}

export default LosAngeles
