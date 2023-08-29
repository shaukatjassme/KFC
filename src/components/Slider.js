import React from 'react'

export const  Slider = () => {
  return (
    <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.kfcpakistan.com/images/44752b10-3743-11ee-9ed8-8f76828af5c3-Web1_desktop_image-2023-08-10060054.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.kfcpakistan.com/images/dca91780-3c0b-11ee-9f68-db691b5759ab-Midnightdeal-3-WEB_desktop_image-2023-08-16080653.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.kfcpakistan.com/images/31901040-378f-11ee-a581-4b8928a7b83b-995x356-family-festival-3_desktop_image-2023-08-10150424.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
