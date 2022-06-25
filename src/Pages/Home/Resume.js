import React from 'react';
import  './Resume.css'

const Resume = () => {
    return (
        <section className='d-flex justify-content-between'>
            
            <div className='w-50'>
                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className='about-img'/>
            </div>
            <div className='w-50'>
                <p className='px-sm-4 px-md-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatem temporibus, in nihil nobis quae debitis expedita, provident nostrum at modi numquam, consectetur quam. Nisi ex ea dolorum qui nostrum?</p>
                <p className='px-sm-4 px-md-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatem temporibus, in nihil nobis quae debitis expedita, provident nostrum at modi numquam, consectetur quam. Nisi ex ea dolorum qui nostrum?</p>
            </div>
        </section>
        
    );
};

export default Resume;