import React from 'react'

export default function Category() {
  return (
    <div className=" container mt-5 border border-2 shadow">
      <div className="container border border-4 mt-3 mb-5">
        <h1 className="text text-center mb-5">Category Container</h1>
        <div className="row">
          <div className="col-3">
            <div className="card mb-3" style={{ width: "12rem" }}>
              <div className="card-body">
                <h5 className="card-title text-center">Category card</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card mb-3" style={{ width: "12rem" }}>
              <div className="card-body">
                <h5 className="card-title text-center">Category card</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card mb-3" style={{ width: "12rem" }}>
              <div className="card-body">
                <h5 className="card-title text-center">Category card</h5>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card mb-3" style={{ width: "12rem" }}>
              <div className="card-body">
                <h5 className="card-title text-center">Category card</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card mb-3" style={{ maxWidth: "350px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={"./imageInPublic.jpg"} height={"112"} width={"100"} alt="house picture" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-center">Stays</h5>
                    <p className="card-text text-center">Homes,Boutique hotels & more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card mb-3" style={{ maxWidth: "350px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={"./imageInPublic.jpg"} height={"112"} width={"100"} alt="house picture" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-center">Experiences</h5>
                    <p className="card-text text-center">Activities hosted by locals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card mb-4" style={{ maxWidth: "350px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={"./imageInPublic.jpg"} height={"112"} width={"100"} alt="house picture" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-center">Adventures</h5>
                    <p className="card-text text-center">Hosted trips including lodging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card mb-3" style={{ maxWidth: "350px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={"./imageInPublic.jpg"} height={"112"} width={"100"} alt="house picture" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-center">Restaurants</h5>
                    <p className="card-text text-center">Popular spots to east & drink</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
