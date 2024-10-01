// untuk front end toko

const NamaToko = ({ params }: { params: { toko_name: string } }) => {
    return <div>My Post: {params.toko_name}</div>
  }

export default NamaToko