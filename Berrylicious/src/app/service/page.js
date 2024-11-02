import Link from "next/link";
import Image from "next/image";
export default function Our_Services() {
    return (

        <div>

            <h1 className="s_h1">Berrylicious Offerings</h1>

            {/* Service Container Start */}
            <div className="s_container">
                  
               {/* Service Box_01 Start */}
                <div className="s_box">
                    <Image
                        src={require("/img/service_01.png")}
                        alt="orange_img"
                        className="fruit_image"
                    />
                    <h2>Orange Bliss</h2>
                    <p>At Berrylicious, we are proud to offer a variety of premium fruits that combine freshness, quality and rich flavor. Our juicy oranges are harvested from premium farms and are packed with Vitamin C for an energizing snack or juicer.</p>

                    <Link href="/service" className="s_button">Read More</Link>
                </div>
               {/* Service Box_01 End */}




               {/* Service Box_02 Start */}
                <div className="s_box">
                    <Image
                        src={require("/img/service_02.png")}
                        alt="grapes_img"
                        className="fruit_image"
                    />
                    <h2>Grapes Glow</h2>
                    <p>GrapeGlow offers the perfect balance of sweet and juicy - every grape is vibrant in color and bursting with refreshing flavor. Carefully selected for quality, GrapeGlow offers a delicious treat. Savor every bite of these amazing grapes.</p>

                    <Link href="/service" className="s_button">Read More</Link>
                </div>
                {/* Service Box_02 End */}





                {/* Service Box_03 End */}
                <div className="s_box">
                    <Image
                        src={require("/img/service_03.png")}
                        alt="guava_img"
                        className="fruit_image"
                    />
                    <h2>Guava Bliss</h2>
                    <p>GuavaBliss delivers a tropical flavor experience with guavas picked at the peak of ripeness, providing the perfect mix of sweet and tart in every bite. Rich in Vitamin C, fiber and antioxidants, guava bliss is as nutritious as it is delicious.</p>

                    <Link href="/service" className="s_button">Read More</Link>
                </div>
                {/* Service Box_03 End */}
 
              </div>
              {/* Service Container End */}

        </div>

    );
}