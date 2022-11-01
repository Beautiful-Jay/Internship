
import React from 'react';
import profile__img from '../components/profile__img.png';
import IconGit from '../components/IconGit.png';
import slack from '../components/slack.png';
import Icon from '../components/Icon.png';
import Icon2 from '../components/Icon2.png';

function Content() {
  return (
    <>
    <div className='font-inter'>
      <div>
        <img src={Icon}
       className='share_icon rounded-full'alt=''/>

        <img src={Icon2}
           className='share_icon2' alt=''/>
    </div>

      <div className='flex justify-center pt-8'>

        <img id='profile__img'
         className="rounded-full items-center"
          src={profile__img}
           alt="logo" />

      </div>

      <h2 id='twitter'>Annette Black</h2>

      <h2 id='slack' className='my-0'>Madamori Joyce</h2>

      <div className='grid justify-items-center px-16'>
      <a href='https://twitter.com/joyce_madamori'
       className='rounded-[10px] p-3 text-center w-[90%] my-2 bg-[#EAECF0]'
       >Twitter Link</a>

      <a id='btn__zuri'
       href='https://training.zuri.team/'
        title='Want to Learn Coding/Design Better?'
         className='rounded-[10px] p-3 text-center w-[90%] my-2 bg-[#EAECF0]'
         >Zuri Team</a>

      <a id='books'
       href='http://books.zuri.team'
        className='rounded-[10px] p-3 text-center w-[90%] my-2 bg-[#EAECF0]'
        >Zuri Books</a>

      <a id='book__python'
       href='https://books.zuri.team/python-for-beginners?ref_id=adeola-ogundijo'
        className='rounded-[10px] p-3 text-center w-[90%] my-2 bg-[#EAECF0]'
        >Python Books</a>

      <a id='pitch'
       href='https://background.zuri.team'
        title='Be sure not to Employ a Bad Developer'
         className='rounded-[10px] p-3 text-center w-[90%] my-2 bg-[#EAECF0]'
         >Background Check for Coders</a>

      <a id='book__design'
       href='https://books.zuri.team/design-rules'
        title='Take a look at the Free Design by Zuri!>'
         className='rounded-[10px] p-3 text-center w-[90%] my-2 mb-10 bg-[#EAECF0]'
         >Design Books</a>
    </div>

    <div className='profile_bottom space-x-6'>
        <img src={slack} alt='' />
        <img src={IconGit} alt='' />
    </div>

    </div>
    </>
  )
}

export default Content;

