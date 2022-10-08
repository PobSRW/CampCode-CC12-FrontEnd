import { useCartContext } from '../../context/cartContext';

function CartItem({
	courseName,
	id,
	description,
	price,
	instructorFirstName,
	instructorLastName,
	image,
}) {
	const { removeCartItem } = useCartContext();
	return (
		<div className='flex bg-stone-200 justify-between mb-6 p-5 px-[30px] rounded-lg '>
			<div className='flex'>
				<div className='bg-sky-500 w-[280px] h-[200px] rounded-2xl overflow-hidden '>
					<img src={image} alt='Course' width='280' height='200' />
				</div>
				<div className='ml-[40px] p-4'>
					<h1 className='font-extrabold text-4xl mb-1'>{courseName}</h1>
					<h1 className='text-xl mb-6'>{description}</h1>
					<h1 className='text-xl mb-6'>
						Instructor : {instructorFirstName} {instructorLastName}
					</h1>
					<h1 className='text-3xl font-bold'>Price : {price} Bath</h1>
				</div>
			</div>
			<div className='flex items-center'>
				<button onClick={() => removeCartItem(id)}>
					<i className=' fa-solid fa-trash text-3xl '></i>
				</button>
			</div>
		</div>
	);
}

export default CartItem;
