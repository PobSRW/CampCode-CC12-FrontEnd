import { useCartContext } from '../../context/cartContext';

function PaymentSlip() {
	const { setSlipImage } = useCartContext();
	return (
		<>
			<div className='w-full h-[170px] border-4 p-5'>
				<h1 className='p-2 font-bold'>ธนาคาร : กสิกล้วยไทย</h1>
				<h1 className='p-2 font-bold'>
					ชื่อบัญชี : แคมป์โค้ดอิอิซ่า จำกัด มหาชน
				</h1>
				<h1 className='p-2 font-bold'>เลขที่บัญชี : 314159265358</h1>
			</div>
			<h1 className='my-3 text-lg font-semibold'>Upload Slip</h1>
			<div className='mb-6'>
				<label className='block shadow'>
					<span className='sr-only'>Choose File</span>
				</label>
				<input
					type='file'
					className='block w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400'
					onChange={(e) => {
						setSlipImage(e.target.files[0]);
					}}
				/>
			</div>
		</>
	);
}

export default PaymentSlip;
