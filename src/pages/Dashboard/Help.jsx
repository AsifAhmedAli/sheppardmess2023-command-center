import React from 'react'
import Header from '../../components/Header'
import DefaultLayout from '../../layout/DefaultLayout'
import image1 from '../../images/integrations/image1.png'
import image2 from '../../images/integrations/image2.png'
import image3 from '../../images/integrations/image3.png'
import image4 from '../../images/integrations/image4.png'
import image5 from '../../images/integrations/image5.png'
import image6 from '../../images/integrations/image6.png'
import image7 from '../../images/integrations/image7.png'
import image8 from '../../images/integrations/image8.png'
import image9 from '../../images/integrations/image9.png'
import image10 from '../../images/integrations/image10.png'
import image11 from '../../images/integrations/image11.png'
import image12 from '../../images/integrations/image12.png'
import image13 from '../../images/integrations/image13.png'
import image14 from '../../images/integrations/image14.png'
import image15 from '../../images/integrations/image15.png'
import image16 from '../../images/integrations/image16.png'
import image17 from '../../images/integrations/image17.png'
import image18 from '../../images/integrations/image18.png'
import image19 from '../../images/integrations/image19.png'
import image20 from '../../images/integrations/image20.png'


const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20
];

const Integrations = () => {
  return (
    <>
    <DefaultLayout>
      {/* Header start */}
   <div className='flex flex-col'>
   <div className='w-[1538px] flex items-center justify-between pt-5'>
      <div>
        <h1 className='text-[#FFFFFF] text-[40px] font-bold leading-[48px]'>Help</h1>
        <p className='text-[#C3C3C3] text-[20px] font-medium leading-[30px] capitalize'>Here’s your burnout assessment overview</p>
      </div>
     
    <div className="flex items-center">
   <Header />
    </div>
    </div>

      </div>
     
    </DefaultLayout>
    </>
  )
}

export default Integrations