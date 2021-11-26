import React, { Component } from "react";

class Addservice extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="mt-5">Add Service</h1>
          <div className="row mt-5 mb-3">
            <h3>Service Details</h3>
            <div className="col-6">
                <label>Service Item</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Assigned Employee</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Brand</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Category</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Customer Name</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Customer Telephone</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row mb-3">
           
            <div className="col-6">
                <label>Customer Address</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
            <div className="col-6">
            <label>Fee</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
          </div>
          <div className="row">
           
            <div className="col-12">
                <label>Special Note</label>
            <input className="form-control" type="text" placeholder="Default input"/>
            </div>
           
          </div>
          <button className="btn btn-success mt-5">Create</button>
          <a href="./service"><button className="btn btn-danger mt-5 mx-4">Cancel</button></a>
        </div>
      </div>
    );
  }
}
export default Addservice;
