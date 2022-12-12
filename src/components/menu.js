import React from 'react'
import {
	FaShoppingCart,
	FaTelegram,
	FaMap,
	FaPhoneAlt,
	FaGifts,
} from 'react-icons/fa'
import { SiXiaomi } from 'react-icons/si'
import { Icon32LogoVkColor } from '@vkontakte/icons'
import { IoLogoWhatsapp } from 'react-icons/io'

const Menu = () => {
	return (
		<div>
			<div className='mt-5 mb-8'>
				<a
					className='links'
					href='https://vk.com/wall-77957242_7423?utm=banner'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>
						<Icon32LogoVkColor className='icon' />
						Конкурс ВКонтакте
						<FaGifts className='icon ml-2 text-red-600 animate-bounce' />
					</button>
				</a>
				<a
					className='links'
					href='https://irk.m-seller.ru'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>
						<SiXiaomi className='icon text-orange-600' />
						Наш сайт Xiaomi
					</button>
				</a>
				<a
					className='links'
					href='http://scirk.ru/'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>
						<FaShoppingCart className='icon text-slate-800' />
						Наш сайт Sony
					</button>
				</a>
				{/* <a
					className='links'
					href='https://vk.com/sony_xiaomi_irk'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>Instagram*</button>
				</a> */}
				<a
					className='links'
					href='https://t.me/M_seller_irk'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>
						<FaTelegram className='icon text-blue-500' />
						Telegram
					</button>
				</a>
				<a
					className='links'
					href='https://wa.me/+79834041129'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>
						<IoLogoWhatsapp className='icon text-green-400' />
						Whats'Up
					</button>
				</a>
				<a
					className='links'
					href='https://yandex.ru/maps/-/CCUjBBTycC'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>
						<FaMap className='icon text-red-600' />
						Яндекс Карты
					</button>
				</a>
				<a
					className='links'
					href='tel:+79834041129'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>
						<FaPhoneAlt className='icon text-slate-800' />
						Позвонить
					</button>
				</a>
			</div>
			<div className='mx-auto text-center px-5 font-light text-slate-500'>
				ООО «Вега» 664011, г.Иркутск, ул.Карла Маркса, д.39 ИНН 3808114364 ОГРН
				1043801065978
			</div>
			{/* <div className='mx-auto text-center'>
				* принадлежит компании Meta, признанной в России экстремистской
				организацией
			</div> */}
		</div>
	)
}

export default Menu
