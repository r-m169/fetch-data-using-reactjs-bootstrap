import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './skills.css';

const SkillsSection = () => {
  return (
    <>
    <div className="heading">
      <h2
        style={{
          color: 'white',
          marginTop: '30px',
          borderBottom: '2px solid white',
          paddingBottom: '10px',
          marginLeft: '112px',
        }}
      >
        My Skills
      </h2>
    </div>
    <div className="body">
      <div className="container">
        <div className="progress-title">
          <h3>HTML</h3>
          <div className="progress ">
            <div className="progress-bar ht_skill" >
              <div className="progress-value ht_skill">100%</div>
            </div>
          </div>
        </div>

        <div className="progress-title">
          <h3>CSS3</h3>
          <div className="progress ">
            <div className="progress-bar css_skill" >
              <div className="progress-value css_skill">70%</div>
            </div>
          </div>
        </div>

        <div className="progress-title">
          <h3>Bootstrap</h3>
          <div className="progress ">
            <div className="progress-bar bt_skill" >
              <div className="progress-value bt_skill">30%</div>
            </div>
          </div>
        </div>

        <div className="progress-title">
          <h3>ReactJS</h3>
          <div className="progress">
            <div className="progress-bar r_skill" >
              <div className="progress-value r_skill">40%</div>
            </div>
          </div>
        </div>

        <div className="progress-title">
          <h3>NextJS</h3>
          <div className="progress">
            <div className="progress-bar n_skill" >
              <div className="progress-value n_skill">30%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SkillsSection;
