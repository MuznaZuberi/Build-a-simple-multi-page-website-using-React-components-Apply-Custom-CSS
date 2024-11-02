import Image from "next/image";
export default function Slider() {
	return(
      
      <div>

       {/*Slider Section */}
       
       <Image
        className="slider"
        alt="slider_img"
        src={require("/img/slider.jpg")}

      />


      </div>

	)
}

