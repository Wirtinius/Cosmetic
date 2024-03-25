import useCart from '../Cart/handler/getCartHandler'

export function Cart() {
    const cart = useCart();
    console.log(cart);
    return (
        <div className='my-10 mx-10'>
            {cart.map((product) => (
                <div className='mt-10 bg-gray-100 grid grid-cols-2 '>
                    <div>
                        <img className='w-64 h-64 ' src={`http://localhost:3000` + product.image}/>
                    </div>
                    <div className='text-center mt-28'>
                        <h1 className='text-xl'>{product.name}</h1>
                        <h3 className='text-sm '>{product.price}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}