'use client'

const AddToCart = () => {
  return (
    <div>
      <button className="text-white bg-blue-700 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => console.log('click me')}>Add to Cart</button>

      <button className="btn btn-accent">Sign In</button>
    </div>
  )
}

export default AddToCart
