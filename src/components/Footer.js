import React from 'react'

export const Footer = () => {
  return (

    <>


<div className='container-fluid mt-4'>
          <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>

<footer className="section bg-footer footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Information</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="">Pages</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Feuchers</a></li>
                            <li><a href="">Pricing</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="">Monitoring Grader </a></li>
                            <li><a href="">Video Tutorial</a></li>
                            <li><a href="">Term &amp; Service</a></li>
                            <li><a href="">Zeeko API</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Help</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li><a href="">Sign Up </a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Terms of Services</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="">
                        <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
                        <p className="contact-info mt-4">Contact us if need help withanything</p>
                        <p className="contact-info">+01 123-456-7890</p>
                        <div className="mt-5">
                         
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="text-center mt-5">
            <p className="footer-alt mb-0 f-14">2023 © Shaukatjassme, All Rights Reserved</p>
        </div>
    </footer>
    </>
   
  )
}
