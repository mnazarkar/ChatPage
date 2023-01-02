import React from 'react';
import './ChatPage.scss';
import img1 from './images/src1.jfif';
import img2 from './images/src2.jfif';
import img3 from './images/src3.jfif';
import img4 from './images/src4.jfif';
import img5 from './images/src5.jfif';
import img6 from './images/src61.jfif';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const ChatPage = () => {
    const arr3 = [
        {
            'id': 1,
            'img': img1,
            'msg': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi velit fugit necessitatibus id modi accusantium autem, nemo dolorum aliquam quasi, unde odit recusandae culpa.',
            'time': '2 a.m.',
            'msgBy': 'friend'
        },
        {
            'id': 2,
            'img': img1,
            'msg': 'Lorem ipsum dolor sit amet consectetur?',
            'time': '2 a.m.',
            'msgBy': 'friend'
        },
        {
            'id': 3,
            'img': 0,
            'msg': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi velit fugit necessitatibus id modi ',
            'time': '2 a.m.',
            'msgBy': 'me'
        },
        {
            'id': 4,
            'img': img1,
            'msg': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi velit fugit necessitatibus id',
            'time': '2 a.m.',
            'msgBy': 'friend'
        },
    ]
    const arr2 = [
        {
            'id': 1,
            'img': img2,
            'notification': 4,
            'name': 'John Appleseed',
            'msg': 'Lorem ipsum dolor sit....',
            'time': '2 a.m.',
            'color': 'hsl(206deg 33% 96%)'
        },
        {
            'id': 2,
            'img': img1,
            'notification': 0,
            'name': 'Robert William',
            'msg': 'Lorem ipsum dolor sit....',
            'time': '3 a.m.',
            'color': 'hsl(0deg 0% 100%)'
        },
        {
            'id': 3,
            'img': img3,
            'notification': 4,
            'name': 'Alyona Kosheeva',
            'msg': 'Lorem ipsum dolor sit....',
            'time': '4 a.m.',
            'color': 'hsl(206deg 33% 96%)'
        },
        {
            'id': 4,
            'img': img4,
            'notification': 4,
            'name': 'Jonathan Leane',
            'msg': 'Lorem ipsum dolor sit....',
            'time': '5 a.m.',
            'color': 'hsl(206deg 33% 96%)'
        },
        {
            'id': 5,
            'img': img5,
            'notification': 5,
            'name': 'Albert Steven',
            'msg': 'Lorem ipsum dolor sit....',
            'time': '6 a.m.',
            'color': 'hsl(206deg 33% 96%)'
        },
    ]
    const arr = [
        {
            'id': 1,
            'name': 'Robert William',
            'status': 'Online',
        },
        {
            'id': 2,
            'name': 'Aibert Steven',
            'status': 'Online',
        },
        {
            'id': 3,
            'name': 'Jonathan Leane',
            'status': 'Online',
        },
        {
            'id': 4,
            'name': 'Bagus Fikri',
            'status': 'Online',
        },
        {
            'id': 5,
            'name': 'Alyona Kosheeva',
            'status': 'Online',
        },
        {
            'id': 6,
            'name': 'Muhammad Zayn',
            'status': 'Online',
        },
        {
            'id': 7,
            'name': 'Diana',
            'status': 'Offline',
        },
    ];

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            border: `2px solid hsl(206deg 33% 96%)`,
            height: '25px',
            width: '25px',
            borderRadius: '50%',
            backgroundColor: 'hsl(206deg 59% 59%)',
            color: 'hsl(193deg 100% 86%)'
        },
    }));
    return (
        <div className="flex-master">
            <div className="box-1">
                {/* <SmsIcon style={{color:'hsl(205deg 14% 69%)'}}></SmsIcon> */}
                <div className="header-b1">
                    <div style={{ color: "hsl(208deg 8% 55%)" }}><svg style={{ color: 'hsl(205deg 14% 69%)' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                        <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg> HiChat</div>
                    <div style={{ color: "hsl(201deg 9% 63%)" }}><svg style={{ color: 'hsl(205deg 9% 51%)' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg> Search
                    </div>
                </div>
                <div className="list-b1">
                    <div className="list-friends">FRIENDS</div>
                    <div className="list-new">
                        <div className="list-new1">NEW</div>
                    </div>
                </div>
                <div className="friends-list-box">
                    <div className="friends-chat">
                        {
                            arr2.map((e) => {
                                return (
                                    <div key={e.id} className='friends-chat-content' style={{ backgroundColor: [e.color] }}>
                                        <div>
                                            <StyledBadge badgeContent={e.notification} anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}>
                                                <img src={e.img} alt="Img" className="avatar"></img>
                                            </StyledBadge>
                                        </div>
                                        <div className='friends-chat-name-msg' style={{ color: 'hsl(206deg 3% 48%)' }}><strong>{e.name}</strong>
                                            <br />
                                            <div style={{ color: "hsl(206deg 9% 85%)" }}>{e.msg}</div>
                                        </div>
                                        <div style={{ color: 'hsl(206deg 4% 65%)' }}>{e.time}</div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            <div className="box-2">
                <div className="header-b2">
                    <div className="header-list-b2">
                        <div className="friends">Friends</div>
                        <div>Works</div>
                        <div>Family</div>
                        <div style={{ display: 'flex', alignItems: 'center' }}><span style={{ fontSize: 22 }}>+</span>  Category</div>
                    </div>
                    <div className="imageClass">
                        <div><img src={img6} alt="Img" className="avatar"></img></div>
                        <div> Agung <br />
                            Available <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div className="chat-box-b2">
                    <div className="chat">
                        <div className="chat-header">
                            <div className="header-content-1">CHAT</div>
                            <div className="header-content-2">
                                <div style={{ width: "25%" }}><svg style={{ color: "hsl(180deg 7% 84%)" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone primary" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg></div>
                                <div style={{ width: "25%" }}><svg style={{ color: "hsl(180deg 7% 84%)" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                                </svg></div>
                                <div className="dots-icon">
                                    <div className="dots-icon-1"><svg style={{ color: 'hsl(206deg 4% 68%)' }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg></div>
                                </div>
                            </div>
                        </div>
                        <div className='chat-box-chat'>
                            {
                                arr3.map((e) => {
                                    return (
                                        <div className='chat-box-chat-content'>
                                            {
                                                e.msgBy === 'friend' ?
                                                    <>
                                                        <div style={{ width: '15%' }}>
                                                            <img src={img1} alt="Img" className="avatar"></img>
                                                        </div>
                                                        <div style={{ width: '60%', display: 'inline', padding: '12px 12px', borderRadius: '5px', color: 'hsl(202deg 100% 86%)', backgroundColor: 'hsl(207deg 70% 60%)' }}>
                                                            <div>{e.msg}</div>
                                                            <div style={{ color: 'hsl(206deg 92% 76%)', marginTop: '12px' }}>{e.time}</div>
                                                        </div>
                                                        <div style={{ width: '15%' }}></div></> :
                                                    <>
                                                        <div style={{ width: '15%' }}></div>
                                                        <div style={{ width: '15%' }}></div>
                                                        <div style={{ width: '60%', display: 'inline', padding: '12px 12px', borderRadius: '5px', color: 'hsl(206deg 3% 55%)', backgroundColor: 'hsl(206deg 33% 96%)' }}>
                                                            <div>{e.msg}</div>
                                                            <div style={{ color: 'hsl(206deg 5% 71%)', marginTop: '12px' }}>{e.time}</div>
                                                        </div></>

                                            }
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="online-user">
                        <div className="online-user-header">
                            <div className="online-user-header-content">ONLINE USER</div>
                        </div>
                        <div className='online-user-list'>
                            {
                                arr.map((e) => {
                                    return (
                                        <div key={e.id} className='online-user-list-content'>
                                            <div className='online-user-name'>
                                                <div className='empty-box'></div>
                                                <div className='online-user-name-display'>
                                                    <div>{e.name}</div>
                                                    <div style={{ color: 'hsl(206deg 7% 80%)' }}>{e.status}</div>
                                                </div>

                                            </div>
                                            <div className='online-user-status'>
                                                {
                                                    e.status === 'Online' ?
                                                        <svg style={{ color: 'hsl(216deg 71% 65%)' }} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                                            <circle cx="8" cy="8" r="8" />
                                                        </svg>
                                                        :
                                                        <svg style={{ color: 'hsl(201deg 14% 81%)' }} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                                            <circle cx="8" cy="8" r="8" />
                                                        </svg>
                                                }

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
