import React from 'react';
import sketch from '../Images/Icons copy.png';
import design from '../Images/Group 1404.png';
import dfile from '../Images/Group 1403.png';
import rand from '../Images/outline.png';
import anim from '../Images/Group.png';
import { useState } from 'react';
import Modal from './Modal';
export default function Home({color,setColor}) {

  const [add,setAdd] = useState(false);
  
  return (
    <div className="home" style={{backgroundColor: color}}>
      <div className="home-section">
        <h2 className="home-title">Processes</h2>
        <div className="process-section">
          <div className="buttons">
            <div className="step">
              <img src={sketch} alt="" />
              <button className="step-btn"></button>
              <span>Idea Sketch</span>
            </div>
            <div className="step">
              <img src={design} alt="" />
              <button className="step-btn"></button>
              <span>Design</span>
            </div>
            <div className="step">
              <img src={dfile} alt="" />
              <button className="step-btn"></button>
              <span>3D File</span>
            </div>
            <div className="step">
              <img src={rand} alt="" />
              <button className="step-btn"></button>
              <span>Rand</span>
            </div>
            <div className="step">
              <img src={anim} alt="" />
              <button className="step-btn"></button>
              <span>Animation</span>
            </div>

            <div className="color-edit">
              <div className="default-colors">
                <button className="color" onClick={()=>{setColor('red')}}></button>
                <button className="color" onClick={()=>{setColor('#545662')}}></button>
                <button className="color" onClick={()=>{setColor('darkblue')}}></button>
                <button className="color" onClick={()=>{setColor('green')}}></button>
              </div>
              <div className="color-select">
                <input type="color" onChange={(e)=>{setColor(`${e.target.value}`)}}/>
              </div>
            </div>

            <button className="complete-step-btn">✔</button>
          </div>
          <div className="process"></div>
        </div>
        <div className='addBtn'>
          <button  onClick={() => setAdd(!add)} className='btn'>+ Добавить</button>
          </div>
          <Modal name={add}/>
      </div>
    </div>
  );
}
