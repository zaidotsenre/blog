import { useState } from 'react';
import { useEffect } from 'react';
import placeholder from '../img/placeholder.png';
import './Reader.css';
import Navbar from '../components/Navbar';

function Reader(props) {

    return (
        <>
            <Navbar />
            <div className="Reader">
                <img src={placeholder}></img>
                <h1>Titulo Cualquiera</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt
                    augue. Sit amet est placerat in egestas. Lacus suspendisse
                    faucibus interdum posuere lorem ipsum dolor. Tortor
                    condimentum lacinia quis vel eros donec ac odio.
                    Leo duis ut diam quam nulla porttitor massa id. Turpis
                    egestas pretium aenean pharetra. Neque ornare aenean
                    euismod elementum nisi quis eleifend quam. Lobortis
                    elementum nibh tellus molestie nunc non blandit massa.
                    Risus ultricies tristique nulla aliquet enim tortor at
                    auctor.</p>

                <p>Dolor magna eget est lorem. Sed risus ultricies tristique
                    nulla. A arcu cursus vitae congue. Amet cursus sit amet
                    dictum sit amet justo donec. Amet mattis vulputate enim
                    nulla aliquet porttitor lacus luctus. Nunc congue nisi
                    vitae suscipit tellus mauris a diam. Viverra nibh cras
                    pulvinar mattis nunc sed. Convallis posuere morbi leo
                    urna molestie at. Non nisi est sit amet facilisis magna
                    etiam tempor orci. Vivamus at augue eget arcu dictum varius
                    duis at. Natoque penatibus et magnis dis. Ligula ullamcorper
                    malesuada proin libero nunc consequat interdum varius. Quis
                    commodo odio aenean sed adipiscing. Neque volutpat ac
                    tincidunt vitae semper. Imperdiet proin fermentum leo
                    vel orci porta non. Facilisis leo vel fringilla est
                    ullamcorper eget nulla. Massa tempor nec feugiat nisl
                    pretium. Ornare lectus sit amet est placerat in egestas.
                    Sed elementum tempus egestas sed sed risus pretium quam
                    vulputate.</p>

                <p>Convallis convallis tellus id interdum. Tristique magna
                    sit amet purus gravida quis blandit turpis cursus.
                    Pretium aenean pharetra magna ac placerat vestibulum
                    lectus. Ac felis donec et odio. Tortor id aliquet lectus
                    proin nibh nisl condimentum id. Nunc mi ipsum faucibus
                    vitae. Id ornare arcu odio ut sem. Posuere morbi leo urna
                    molestie at elementum eu. Sagittis aliquam malesuada
                    bibendum arcu vitae. Pellentesque dignissim enim sit
                    amet venenatis urna cursus eget. Quam viverra orci
                    sagittis eu volutpat odio facilisis mauris. Leo vel
                    fringilla est ullamcorper eget. Ipsum a arcu cursus
                    vitae congue mauris rhoncus aenean. Iaculis at erat
                    pellentesque adipiscing commodo. Tortor dignissim
                    convallis aenean et tortor at risus viverra. Vitae
                    sapien pellentesque habitant morbi tristique senectus
                    et. Suspendisse interdum consectetur libero id faucibus
                    nisl. Turpis tincidunt id aliquet risus. Ut porttitor leo
                    a diam sollicitudin tempor id eu. Sapien eget mi proin sed
                    libero.</p>

                <p>Enim nunc faucibus a pellentesque sit amet porttitor eget.
                    Sed nisi lacus sed viverra tellus in hac habitasse. Mattis
                    molestie a iaculis at erat pellentesque adipiscing commodo
                    elit. Hac habitasse platea dictumst quisque sagittis.
                    Convallis tellus id interdum velit laoreet id. Ultricies
                    tristique nulla aliquet enim tortor at auctor urna. Nulla
                    facilisi nullam vehicula ipsum a. Blandit cursus risus at
                    ultrices mi. Sem viverra aliquet eget sit amet tellus cras.
                    Enim ut tellus elementum sagittis. Quam lacus suspendisse
                    faucibus interdum posuere lorem ipsum. Vitae congue eu
                    consequat ac felis donec. Feugiat in ante metus dictum at
                    tempor. Scelerisque varius morbi enim nunc faucibus a
                    pellentesque sit. Adipiscing tristique risus nec feugiat
                    in fermentum posuere. Amet volutpat consequat mauris nunc
                    congue nisi vitae suscipit tellus. Nunc scelerisque viverra
                    mauris in aliquam sem fringilla.
                </p>
                <p>Faucibus in ornare quam viverra orci. Cras tincidunt lobortis
                    feugiat vivamus. Cum sociis natoque penatibus et magnis
                    dis parturient montes. Nec sagittis aliquam malesuada
                    bibendum arcu vitae elementum curabitur vitae. Ac tortor
                    vitae purus faucibus ornare. Turpis massa tincidunt dui ut
                    ornare lectus. Elit ut aliquam purus sit amet luctus
                    venenatis. Commodo sed egestas egestas fringilla phasellus.
                    Lacus suspendisse faucibus interdum posuere lorem. Euismod
                    nisi porta lorem mollis. Diam volutpat commodo sed egestas
                    egestas fringilla. Id diam vel quam elementum. In dictum non
                    consectetur a erat nam at lectus.</p>
            </div >
        </>



    );
}

export default Reader;
