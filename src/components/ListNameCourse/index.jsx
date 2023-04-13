import './ListNameCourse.scss'

import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '../Popper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';


function ListNameCourse( { data,index }) {
    const dataName = true
    return <div key={index} className="wrapperName">
        <span>{data}</span>
       {dataName &&  <Tippy
            interactive
            
            placement='right-start'
            render={attrs => (
                <div className="poper-box" tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <div className='wrapper-box d-flex py-1'>
                            <FontAwesomeIcon icon={faHouse} className="icon"/>
                            <a className='link-name-course' href="abc">Toán Cao Cấp</a>
                        </div>
                        <div className='wrapper-box d-flex py-1'>
                            <FontAwesomeIcon icon={faHouse} className="icon"/>
                            <a className='link-name-course' href="abc">Toán Cao Cấp</a>
                        </div>
                        <div className='wrapper-box d-flex py-1'>
                            <FontAwesomeIcon icon={faHouse} className="icon"/>
                            <a className='link-name-course' href="abc">Toán Cao Cấp</a>
                        </div>
                        <div className='wrapper-box d-flex py-1'>
                            <FontAwesomeIcon icon={faHouse} className="icon"/>
                            <a className='link-name-course' href="abc">Toán Cao Cấp</a>
                        </div>
                        <div className='wrapper-box d-flex py-1'>
                            <FontAwesomeIcon icon={faHouse} className="icon"/>
                            <a className='link-name-course' href="abc">Toán Cao Cấp</a>
                        </div>
                        <div className='wrapper-box d-flex py-1'>
                            <FontAwesomeIcon icon={faHouse} className="icon"/>
                            <a className='link-name-course' href="abc">Toán Cao Cấp</a>
                        </div>
                        <div className='wrapper-box d-flex py-1'>
                            <FontAwesomeIcon icon={faHouse} className="icon"/>
                            <a className='link-name-course' href="abc">Toán Cao Cấp</a>
                        </div>
                      
                    </Wrapper>
                </div>
            )}
        >
            <a className='link-btn' href="abc">Toán Cao Cấp</a>
        </Tippy>}
        {!dataName && <a className='link-btn' href="abc">Toán Cao Cấp</a>}
    </div>  
}

export default ListNameCourse;