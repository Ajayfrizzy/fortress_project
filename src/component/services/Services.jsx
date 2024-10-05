import Styles from './Services.module.css'
import Footer from '../layout/footer/Footer'
import Header from '../layout/header/Header'


const Services = () => {
  return (
    <>
    <Header/>
    <div className={Styles.service}>
        <h2>Our Services</h2>
        <div className={Styles.service1}>
            <ol start='1' type='1'>
                <li className={Styles.number}>Engineering Services:
                    <ul>
                        <li><span style={{fontWeight: "bold"}}>Design and Planning:</span>We develop detailed engineering designs, comprehensive project plans, and technical specifications tailored to meet project requirements.</li>

                        <li><span style={{fontWeight: "bold"}}>Feasibility Studies:</span> We assess the technical and financial viability of projects, ensuring they are practical and cost-effective.</li>

                        <li><span style={{fontWeight: "bold"}}>Conceptual & Detailed Design:</span>We provide end-to-end design solutions, including structural, mechanical, electrical, and civil engineering.</li>
                    </ul>
                </li>

                <li className={Styles.number}>Procurement Services:
                    <ul>
                        <li><span style={{fontWeight: "bold"}}>Material and Equipment Sourcing:</span>We identify and procure high-quality materials and equipment essential for project execution.</li>

                        <li><span style={{fontWeight: "bold"}}>Vendor Management:</span> We manage supplier contracts, ensuring quality control, timely deliveries, and adherence to project specifications.</li>

                        <li><span style={{fontWeight: "bold"}}>Logistics:</span> We oversee the efficient transport, storage, and handling of materials and equipment, ensuring smooth operations on-site.</li>
                    </ul>
                </li>

                <li className={Styles.number}>Construction Services:
                    <ul>
                        <li><span style={{fontWeight: "bold"}}>Site Preparation:</span> We handle site clearance and preparation, including earthworks, foundation laying, and other pre-construction activities.</li>

                        <li><span style={{fontWeight: "bold"}}>Building and Installation:</span> Our team supervises the construction of infrastructure, installation of machinery, and ensures compliance with all technical and safety requirements.</li>

                        <li><span style={{fontWeight: "bold"}}>Project Management:</span> We coordinate and manage all on-site activities, ensuring timely, efficient, and cost-effective project delivery.</li>

                        <li><span style={{fontWeight: "bold"}}>Health, Safety, and Environment (HSE) Management:</span> We enforce strict adherence to health, safety, and environmental regulations, prioritizing the well-being of all stakeholders.</li>
                    </ul>
                </li>

                <li className={Styles.number}>Commissioning and Handover:
                    <ul>
                        <li><span style={{fontWeight: "bold"}}>System Testing:</span> We rigorously test systems to ensure they operate according to the project’s design and performance standards.</li>

                        <li><span style={{fontWeight: "bold"}}>Training and Handover:</span>  We provide operational training to the client’s team and ensure a smooth handover of the completed project.</li>

                    </ul>
                </li>
            </ol>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default Services