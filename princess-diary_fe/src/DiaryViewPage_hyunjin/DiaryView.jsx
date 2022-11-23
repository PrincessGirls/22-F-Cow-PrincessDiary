import React from 'react';
import { useEffect } from 'react';
import { useRef, useState} from 'react';
import PasswordModal from '../Modal_hyunjin/PasswordModal';
import Box from '@mui/material/Box';
import './DiaryView.css';
import Modal from '@mui/material/Modal';

const DiaryView = () => {
  const contentRef = useRef();
  const [content, setContent] = useState('');
  const [counter, setCounter] = React.useState(
    ()=>JSON.parse(window.localStorage.getItem("counter"))||0);
  useEffect(()=>{
    window.localStorage.setItem("counter",JSON.stringify(counter));
  },[counter]);
  function onClickcounter(){
    setCounter(counter+1);
}

  const onChange = (event) => {
    setContent(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div className='DiaryViewPage'>
      <div className='diaryInfo'>
        <h2>박가현님의 다이어리<br/><br/>이것은 제목입니다</h2>
      </div>
      <div className='diaryform'>
        <form>
          <textarea
            ref={contentRef}
            value={content}
            name='content'
            onChange={onChange}
            className='userform_textarea'
          >
            {content}
          </textarea>
          <div className='btn'>
            <div className='like' onClick={() => {
                alert('좋아요를 누르셨습니다!');
                onClickcounter();
              }}>
                <svg width="50" height="50" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8197 1.57958L9.999 2.40208L9.1757 1.57883C7.07663 -0.52023 3.67337 -0.52023 1.5743 1.57883C-0.52477 3.6779 -0.52477 7.0812 1.5743 9.1802L9.4697 17.0756C9.7626 17.3685 10.2374 17.3685 10.5303 17.0756L18.4318 9.1788C20.5262 7.0727 20.5298 3.67903 18.4303 1.57958C16.3274 -0.52331 12.9226 -0.52331 10.8197 1.57958Z" fill="#E9B9AF"/>
                </svg>
                <p>{counter}</p>
            </div>
            <div className='deleteEdit'>
                <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"onClick={handleOpen}>
                <circle cx="37.5" cy="37.5" r="37.5" fill="#E9B9AF"/>
                <path d="M38.105 17.1276C40.2383 17.1276 41.983 18.659 42.281 20.631H33.929C34.227 18.659 35.9717 17.1276 38.105 17.1276ZM38.105 12.4C33.3334 12.4 29.4046 16.0216 29.0887 20.631H15.8079C14.4921 20.631 13.4 21.6754 13.4 22.9948C13.4 24.3141 14.4921 25.3585 15.8079 25.3585H18.4441L21.2157 53.2998C21.6957 58.139 25.8586 61.81 30.8101 61.81H45.3999C50.3515 61.81 54.5144 58.139 54.9944 53.2998L57.7659 25.3585H60.4021C61.7179 25.3585 62.81 24.3141 62.81 22.9948C62.81 21.6754 61.7179 20.631 60.4021 20.631H47.1213C46.8054 16.0216 42.8766 12.4 38.105 12.4ZM35.0893 32.4016C35.0893 31.0822 33.9971 30.0378 32.6814 30.0378C31.3656 30.0378 30.2735 31.0822 30.2735 32.4016V50.0394C30.2735 51.3587 31.3656 52.4032 32.6814 52.4032C33.9971 52.4032 35.0893 51.3587 35.0893 50.0394V32.4016ZM45.9365 32.4016C45.9365 31.0822 44.8444 30.0378 43.5286 30.0378C42.2129 30.0378 41.1208 31.0822 41.1208 32.4016V50.0394C41.1208 51.3587 42.2129 52.4032 43.5286 52.4032C44.8444 52.4032 45.9365 51.3587 45.9365 50.0394V32.4016ZM30.8101 57.0824C28.3135 57.0824 26.2462 55.235 26.0088 52.8415L23.2826 25.3585H52.9274L50.2011 52.8415C49.9637 55.235 47.8965 57.0824 45.3999 57.0824H30.8101Z" fill="#FFF9EE" stroke="#FFF9EE" stroke-width="1.2"/>
                </svg> <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                ><Box sx={style}>
                  <PasswordModal></PasswordModal>
                  </Box>
                </Modal>
                <svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"onClick={handleOpen}>
                <circle cx="37.5" cy="37.5" r="37.5" fill="#E9B9AF"/>
                <path d="M32.0212 55.7421L32.1538 55.6971L32.2528 55.5982L59.9904 27.8602L59.5662 27.436L59.9904 27.8602C61.7986 26.0518 62.8144 23.5992 62.8143 21.0419C62.8142 18.4846 61.7982 16.0321 59.9898 14.2239C58.1815 12.4157 55.7289 11.3999 53.1716 11.4C50.6143 11.4001 48.1618 12.4161 46.3536 14.2245L18.616 41.9624L18.517 42.0614L18.472 42.1939L13.5698 56.6462C13.5697 56.6466 13.5695 56.647 13.5694 56.6474C13.3787 57.2032 13.3483 57.8014 13.4818 58.3737C13.6154 58.9464 13.9076 59.4698 14.3251 59.884L14.3307 59.8896C14.3311 59.89 14.3314 59.8904 14.3318 59.8907C14.6221 60.1829 14.9673 60.4149 15.3474 60.5734C15.7281 60.732 16.1363 60.8139 16.5487 60.8143L16.5497 60.8143C16.8958 60.814 17.2396 60.7569 17.5672 60.6453L32.0212 55.7421ZM49.504 17.3778C49.5043 17.3775 49.5046 17.3771 49.505 17.3768C50.4785 16.4112 51.7949 15.8706 53.1661 15.8732C54.5378 15.8758 55.8526 16.4219 56.8225 17.3919C57.7924 18.3618 58.3385 19.6766 58.3411 21.0483C58.3437 22.4196 57.803 23.736 56.8373 24.7095C56.837 24.7099 56.8367 24.7102 56.8364 24.7105L53.6147 27.9322L46.2821 20.5995L49.504 17.3778ZM29.7369 51.8101L18.64 55.5746L22.4044 44.4775L43.1304 23.7513L50.463 31.0839L29.7369 51.8101Z" fill="#FFF9EE" stroke="#FFF9EE" stroke-width="1.2"/>
                </svg>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                ><Box sx={style}>
                  <PasswordModal></PasswordModal>
                  </Box>
                </Modal>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiaryView;