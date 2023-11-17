import React from 'react'

export default function Carousal() {
  return (
    <div><div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
    <div class="carousel-inner" id='carousal'>
        <div className="carousel-caption" style={{zIndex: "10"}}>
        <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success " type="submit">Search</button>
    </form>
        </div>
      <div class="carousel-item active">
        <img src="https://source.unsplash.com/random/900x700/?pizza" class="d-block w-100" style={{filter: "brightness(30%) "}} alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?pastry" class="d-block w-100" style={{filter: "brightness(30%) "}} alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?chocolate shake" class="d-block w-100" style={{filter: "brightness(30%) "}} alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
