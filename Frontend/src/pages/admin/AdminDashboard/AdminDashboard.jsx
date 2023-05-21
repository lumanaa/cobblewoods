import React, { useState } from 'react'

const AdminDashboard = () => {
    const [productImage, setProductImage] = useState(null)

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onloadend = () => {
            setProductImage(reader.result)
        }

        if(file){
            reader.readAsDataURL(file)
        }

    }

    return (
        <>
            <div className='container mt-2'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>
                    <button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                        Add Product
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add product</h5>
                                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <div class="mb-3">

                                            <label htmlFor="">Product Name</label>
                                            <input type="text" class="form-control" placeholder='Enter product name' />

                                            <label className='mt-2' htmlFor="">Product Price</label>
                                            <input type="text" class="form-control" placeholder='Enter product price' />

                                            <label className='mt-2' htmlFor="">Product Category</label>
                                            <input type="text" class="form-control" placeholder='Enter product category' />

                                            <label className='mt-2' htmlFor="">Product Description</label>
                                            <textarea className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Product Image</label>
                                            <input onChange={handleImageUpload} type="file" class="form-control" placeholder='Enter product image' />

                                            {
                                                productImage && <img src={productImage} alt="" className='object-cover rounded-3 mt-2' height={'300px'} width={'100%'} />
                                            }

                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table mt-3">
                    <thead class="table-info">
                        <tr>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="https://picsum.photos/200" alt="" height={40} />
                            </td>
                            <td>Rose</td>
                            <td>100</td>
                            <td>Flower</td>
                            <td>Flower Desc</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-success">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://picsum.photos/200" alt="" height={40} />
                            </td>
                            <td>Rose</td>
                            <td>100</td>
                            <td>Flower</td>
                            <td>Flower Desc</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-success">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default AdminDashboard