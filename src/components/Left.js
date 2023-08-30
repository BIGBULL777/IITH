import React from 'react'
import './Left.css';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const Left = () => {
  return (
    <div className='main'>
        <div className='header'>
            <h1 className='title'>S diagnostics centre</h1>
            <div className='line'></div>
            <p className='text'>
                IITH, Kandi, Sangareddy Dist.
            </p>
        </div>
        <div className='patient'>
            <div className='item'> Name:Kaushik</div>
            <div className='item'> Age:dhgask </div>
            <div className='item'> Email:sjdakd</div>
            <div className='item'> Height: </div>
            <div className='item'> Patient ID: </div>
            <div className='item'> Case ID: </div>
            <div className='item'> Weight: </div>
            <div className='item'> Gender: </div>
            <div className='item'> Date: </div>
            <div className='item'> Contact: </div>
            <div className='item'> Occupation: </div>
            <div className='item'> BMI: </div>
        </div>
        <div className='box'>
            <p className='text1'>
                Walking Analysis
            </p>
        </div>
        <div className='analysis'>
            <div className='aleft'>
            <img src="C:/Users/joysh/Desktop/IITH/analysis_report/public/images/left_foot.png" width={200} height={200}></img>
            </div>
            <div className='aright'>
                <div className='rboxes'>
                    <div className='b1'>
                        abc
                    </div>
                    <div className='b1'>
                        abc
                    </div>
                    <div className='b1'>
                        abc
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Left