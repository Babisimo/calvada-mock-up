import React from 'react'

export default function SanMarcos() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>San Marcos</button>
            <div className='city-dropdown-content'>
                <a href='https://www.sanmarcosca.gov/files/assets/city/v/1/development-svs/engineering/survey-control/citywide-geodetic-control-record-of-survey-23721-north-ame.pdf' target={'_blank'} rel='noreferrer'>Benchmarks Map (ROS 23731)</a>
                <a href='https://www.sanmarcosca.gov/files/assets/city/v/1/development-svs/engineering/survey-control/control-survey-data-sheets-ros-23731.pdf' target={'_blank'} rel='noreferrer'>Benchmarks Data Sheets (ROS 23731)</a>
                <a href='https://www.google.com/maps/d/u/0/viewer?mid=1BqYTSDvSRYlC-9Dc-dEcuUU7DQFyAJM&ll=33.13174679826397%2C-117.175724&z=13' target={'_blank'} rel='noreferrer'>Benchmarks Google MyMaps</a>
            </div>
        </div>
    )
}

