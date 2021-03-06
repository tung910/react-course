import styled from 'styled-components';
import Button from '~/components/Button';
import { ProductType } from '~/types/product.type';
const BoxDetailProductStyled = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
`;
const BoxDetailLeft = styled.div`
	overflow: hidden;
	width: 30%;
	.box-gallery {
		padding: 10px;
		margin-bottom: 10px;
	}
	.gallery-thumbs {
		display: flex;
		gap: 10px;
		.item-thumb {
			width: 60px;
			height: 60px;
			border-radius: 10px;
			border: 1px solid #cccc;
			padding: 5px;
		}
	}
`;
const BoxDetailCenter = styled.div`
	width: 420px;
`;
const BoxDetailRight = styled.div`
	width: 360px;
	.title {
		p {
			color: #444444;
			font-weight: 500;
			font-size: 18px;
			line-height: 22px;
		}
	}
	.content {
		margin-top: 10px;
		table {
			border: 1px solid #f2f2f2;
			border-radius: 18px;
			tr {
				width: 100%;
			}
			tr:nth-child(2n-1) {
				background-color: #f2f2f2;
			}
			th {
				font-weight: 400;
				font-size: 14px;
				line-height: 22px;
				padding: 10px;
				word-break: break-word;
			}
		}
	}
`;
const BoxInfoStyled = styled.div`
	display: flex;
	gap: 10px;
	.price {
		color: #d70018;
		font-weight: 400;
		font-size: 22px;
		line-height: 22px;
	}
	.old-price {
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		color: #707070;
	}
`;
const BoxOptionsStyled = styled.div`
	.title {
		margin: 10px 0;
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		color: #444444;
	}
	.options {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		font-weight: 400;
		font-size: 12px;
		line-height: 22px;
		.box {
			padding: 0.8em;
			border: 1px solid #d1d5d8;
			text-align: center;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			:hover {
				background-color: #f8f9f9;
			}
			.sub-img {
				width: 26px;
				height: 26px;
			}
		}
		.active {
			border: 1px solid #d70018;
		}
	}
`;
const BoxPromotionStyled = styled.div<{ color: string; bgHeader: string }>`
	border-radius: 5px;
	border: 1px solid ${(props) => props.color};
	margin-top: 20px;
	.header {
		background-color: ${(props) => props.color};
		color: ${(props) => props.bgHeader};
		padding: 10px;
		.title {
			display: flex;
		}
	}
	.content {
		padding: 15px 20px;
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		a {
			font-weight: 400;
			font-size: 13px;
			line-height: 22px;
			color: #d70018;
		}
	}
`;
const BoxActions = styled.div`
	.group-button {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 20px;
		justify-content: space-between;
		div {
			flex: 1;
		}
	}
	.add-to-cart {
		width: 100%;
		padding: 0.8em;
		text-align: center;
		background-color: #e11b1e;
		border-radius: 8px;
		color: #fff;
		margin-top: 10px;
	}
`;
const BoxPromotionMoreStyled = styled(BoxPromotionStyled)`
	.title {
		p {
			color: #444444;
			font-weight: 400;
			font-size: 14px;
			line-height: 22px;
		}
	}
	.content {
		a {
			display: flex;
			font-weight: 400;
			font-size: 12px;
			line-height: 22px;
			color: #444444;
		}
	}
`;
const specifications = [
	{ key: 'K??ch th?????c m??n h??nh', value: '6.7 inches' },
	{ key: 'C??ng ngh??? m??n h??nh', value: 'Super AMOLED' },
	{
		key: 'Camera sau',
		value:
			'Camera ch??nh: 108 MP, f/1.8, PDAF, OIS Camera ch??n dung: 5 MP, f/2.4',
	},
	{
		key: 'Camera tr?????c',
		value: '32 MP, f/2.2',
	},
	{
		key: 'Chipset',
		value: 'Snapdragon 778G 5G 8 nh??n',
	},
	{
		key: 'Dung l?????ng RAM',
		value: '8 GB',
	},
	{
		key: 'B??? nh??? trong',
		value: '256 GB',
	},
	{
		key: 'Pin',
		value: '5000 mAh',
	},
	{
		key: 'Th??? SIM',
		value: '2 SIM (Nano-SIM)',
	},
	{
		key: ' H??? ??i???u h??nh',
		value: 'Android 12, One UI 4.1 ',
	},
	{
		key: '????? ph??n gi???i m??n h??nh ',
		value: '1080 x 2400 pixels (FullHD+)     ',
	},
	{
		key: 'T??nh n??ng m??n h??nh ',
		value: 'T???n s??? qu??t 120 Hz, K??nh c?????ng l???c Corning Gorilla Glass 5 ',
	},
	{
		key: 'Lo???i CPU ',
		value: 'Octa-core (2.4 GHz & 1.8 GHz) ',
	},
	{
		key: 'Tr???ng l?????ng ',
		value: '181 g ',
	},
	{
		key: 'Bluetooth ',
		value: 'v5.0 ',
	},
	{
		key: ' ',
		value: ' ',
	},
];

const DetailProduct = ({
	data,
	onClick,
}: {
	data: ProductType;
	onClick: (data: ProductType) => void;
}) => {
	return (
		<BoxDetailProductStyled>
			<BoxDetailLeft>
				<div className='box-gallery'>
					<img src={data.img} alt={data.name} />
				</div>
				<div className='gallery-thumbs'>
					<div className='item-thumb'>
						<img src={data.img} alt={data.name} />
					</div>
					<div className='item-thumb'>
						<img src={data.img} alt={data.name} />
					</div>
				</div>
			</BoxDetailLeft>
			<BoxDetailCenter>
				<BoxInfoStyled>
					<p className='price'>
						{data.saleOffPrice.toLocaleString('vi', {
							style: 'currency',
							currency: 'VND',
						})}
					</p>
					<p className='old-price'>
						{data.originalPrice.toLocaleString('vi', {
							style: 'currency',
							currency: 'VND',
						})}
					</p>
				</BoxInfoStyled>
				<BoxOptionsStyled>
					<div className='title'>Ch???n m??u ????? xem gi?? v?? chi nh??nh c?? h??ng</div>
					<div className='options'>
						<div className='box'>
							<div className='sub-img'>
								<img src={data.img} alt={data.name} />
							</div>
							<div className='content'>
								<p>Tr???ng</p>
								<p>11.00.00??</p>
							</div>
						</div>
						<div className='box active'>
							<div className='sub-img'>
								<img src={data.img} alt={data.name} />
							</div>
							<div className='content'>
								<p>Tr???ng</p>
								<p>11.00.00??</p>
							</div>
						</div>
					</div>
				</BoxOptionsStyled>
				<BoxPromotionStyled color='#fee2e2' bgHeader='#d70018'>
					<div className='header'>
						<div className='title'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
								/>
							</svg>
							<p>Khuy???n M??i</p>
						</div>
					</div>
					<div className='content'>
						<ul>
							<li>
								Combo 02 M?? ??u ????i CGV tr??? gi?? 200.000??{' '}
								<a href='#'>(Xem chi ti???t)</a>
							</li>
							<li>
								T???ng g??i b???o h??nh Samsung Care+ 12 th??ng tr??? gi?? 1.099.000?? (T???
								01/06-15/06)<a href='#'>(Xem chi ti???t)</a>
							</li>
							<li>
								Gi???m th??m 1.500.000?? khi thu c?? ?????i m???i
								<a href='#'>(Xem chi ti???t)</a>
							</li>
							<li>
								Nh???n th??m khuy???n m??i sau:
								<ul>
									<li>
										Thu c?? ?????i m???i - Tr??? gi?? ?????n 300.000??{' '}
										<a href='#'>(Xem chi ti???t)</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</BoxPromotionStyled>
				<BoxActions>
					<button className='add-to-cart' onClick={() => onClick(data)}>
						Mua ngay
					</button>
					<div className='group-button'>
						<Button
							color='#fff'
							bgColor='#277CEA'
							bgHover='#277CEA'
							className='text-center flex-1'
						>
							Tr??? g??p <br />
							(X??t duy???t qua ??i???n tho???i)
						</Button>
						<Button
							color='#fff'
							bgColor='#277CEA'
							bgHover='#277CEA'
							className='text-center'
						>
							TR??? G??P QUA TH??? <br />
							(Visa, Master Card, JCB)
						</Button>
					</div>
				</BoxActions>
				<BoxPromotionMoreStyled color='#D1D5DB' bgHeader='#D1D5DB'>
					<div className='header'>
						<div className='title'>
							<p>??u ????i th??m</p>
						</div>
					</div>
					<div className='content'>
						<ul>
							<li>
								<a href='#'>
									<img
										width='30'
										src='https://cdn.cellphones.com.vn/media/wysiwyg/2560px-Citi.svg.png'
									/>
									M??? th??? t??n d???ng Citibank - Nh???n e-voucher t???i 2 tri???u
								</a>
							</li>
							<li>
								<a href='#'>
									<img
										width='30'
										src='https://cdn.cellphones.com.vn/media/wysiwyg/photo_2022-06-22_14-38-16.jpg'
										alt=''
									/>
									Nh???p m?? KVCPS - Gi???m th??m 5% (t???i ??a 250.000??) khi thanh to??n
									qua Kredivo cho ????n h??ng t??? 500.000??
								</a>
							</li>
							<li>
								<a href='#'>
									<img
										width='30'
										src='https://cdn.cellphones.com.vn/media/wysiwyg/photo_2022-06-22_14-38-16.jpg'
										alt=''
									/>
									Nh???p m?? MOCACPS - Gi???m th??m 5% (t???i ??a 400.000??) khi thanh
									to??n qua v?? Moca cho ????n h??ng t??? 500.000??
								</a>
							</li>
						</ul>
					</div>
				</BoxPromotionMoreStyled>
			</BoxDetailCenter>
			<BoxDetailRight>
				<div className='header'>
					<div className='title'>
						<p>Th??ng s??? k??? thu???t</p>
					</div>
				</div>
				<div className='content'>
					<table>
						<thead>
							{specifications.length > 0 &&
								specifications.map((item, index) => (
									<tr key={index + 1}>
										<th>{item.key}</th>
										<th>{item.value}</th>
									</tr>
								))}
						</thead>
					</table>
					<Button
						color='#212529'
						className='border-spacing-1 border mt-4 border-[#212529] hover:bg-[#f8f9f9]'
					>
						Xem chi tiet
					</Button>
				</div>
			</BoxDetailRight>
		</BoxDetailProductStyled>
	);
};
export default DetailProduct;
