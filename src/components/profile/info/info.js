import React from 'react';
import Loading from '../../assets/loading';
import Social from '../../assets/social';
import user from '../../assets/friend/user.png';
import {faFacebook, faGithub, faVk} from '@fortawesome/free-brands-svg-icons';
import './info.scss';
const Info = ({userProfile}) => {
	if (!userProfile) {
		return <Loading label='Подгружаем информацию о пользователе...'/>
	} else {
		return (
			<section className='info'>
						<div className='info__avatar'>
							<img alt='avatar' src={userProfile.photos.large ? userProfile.photos.large : user}/>
						</div>
						<div className='info__descr'>
							<h2>{userProfile.fullName}</h2>
							<ul>
								<span>
								<strong>Обо мне:</strong>
								</span>
								<span>{userProfile.aboutMe}</span>
							</ul>
							<ul>
								<span>
								<strong>Статус:</strong>
								</span>
								<span>{
									userProfile.lookingForAJob ? 'ищу работу' : 'не ищу работу'
								}
								</span>
							</ul>
							<ul>
								<span>
								<strong>Описание:</strong>
								</span>
								<span>{userProfile.lookingForAJobDescription}</span>
							</ul>
							<ul>
								<span>
								<strong>Контакты:</strong>
								</span>
								<span>
									<div>
										{
											userProfile.contacts.facebook ? <Social color='#2980b9' label={userProfile.contacts.facebook} icon={faFacebook} /> : null
										}
										{
											userProfile.contacts.github ?<Social color='#34495e' label={userProfile.contacts.github} icon={faGithub} /> : null
										}
										{
											userProfile.contacts.vk ? <Social color='#3498db' label={userProfile.contacts.vk} icon={faVk} /> : null
										}
										
										
									</div>
								</span>
							</ul>
						</div>
					</section>
		)
	}
	
}

export default Info;
