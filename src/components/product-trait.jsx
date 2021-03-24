import React from 'react'

export default function ProductTrait() {
    return (
        
            <div>
                <div className="container-fluid ">
                    <div>
                        <h2>Products</h2>
                        <div className="mb-4 w-50" style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                            <input type="text" placeholder=" image" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="mb-4 w-50" style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                            <input type="text" placeholder=" Name" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="mb-4 w-50" style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                            <input type="text" placeholder=" Quqlity" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="mb-4 w-50" style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                            <input type="text" placeholder=" Price" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <select className="form-select w-50 mb-4 p-2 " aria-label="Default select example">
                            <option selected> Select the categories</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                        <div className="mb-4 " style={{ border: 'solid 0.5px black', backgroundColor: 'white' }}>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder=" Descriptions" rows={3} defaultValue={""} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-5">ADD</button>
                </div>
           </div>
    )
}
