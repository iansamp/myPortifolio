import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/splide/css/skyblue';

export default function Splid(){
    return(
        <div>
            <Splide
                options={{
                    type: 'loop',
                    loop: true,
                    autoplay: true,
                    updateOnMove: true,
                    drag: true,
                    interval: 5000,
                }}
            aria-label="Minhas imagens favoritas"
            >
                <SplideSlide>
                    <img src="../public/img/discover-conectar.jpg" alt="conectar" />
                </SplideSlide>
                <SplideSlide>
                    <img src="../public/img/discover-fundamentar.jpg" alt="fundamentar" />
                </SplideSlide>
                <SplideSlide>
                    <img src="../public/img/discover-especializar.jpg" alt="especializar" />
                </SplideSlide>
            </Splide>
        </div>
    )
}