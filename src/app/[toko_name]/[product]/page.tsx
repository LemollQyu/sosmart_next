// frontend detail produk

import LayoutProducts from "./layout/layoutProduct";

const Products = ({ params }: { params: { product: string } }) => {
    return (
    <>

    <LayoutProducts>

      <div className="w-[312px] h-[312px] border rounded-md"></div>

      {/* <div>My Post: {params.product}</div> */}
    </LayoutProducts>
    </>
    )
  }

export default Products;