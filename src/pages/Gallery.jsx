import React from 'react'
import WSPGallery from '../components/WSPGallery'
import banner1 from '../assets/banners/01.jpg'
import banner2 from '../assets/banners/02.jpg'
import banner3 from '../assets/banners/03.jpg'
import banner4 from '../assets/banners/04.jpg'
import banner5 from '../assets/banners/05.jpg'
import banner6 from '../assets/banners/06.jpg'
import banner7 from '../assets/banners/07.jpg'
import banner8 from '../assets/banners/08.jpg'
import banner9 from '../assets/banners/09.jpg'
import banner10 from '../assets/banners/010.jpg'




// thumbnails
import thumb01 from '../assets/thumbnails/01.jpg'
import thumb02 from '../assets/thumbnails/02.jpg'
import thumb03 from '../assets/thumbnails/03.jpg'
import thumb04 from '../assets/thumbnails/04.jpg'
import thumb05 from '../assets/thumbnails/05.jpg'
import thumb06 from '../assets/thumbnails/06.jpg'
import thumb07 from '../assets/thumbnails/07.jpg'
import thumb08 from '../assets/thumbnails/08.jpg'
import thumb09 from '../assets/thumbnails/09.jpg'
import thumb010 from '../assets/thumbnails/010.jpg'
import thumb011 from '../assets/thumbnails/011.jpg'
import thumb012 from '../assets/thumbnails/012.jpg'
export default function Gallery() {
    const galleryImages = [
        {
            img: banner1
        },
        {
            img: banner2
        },
        {
            img: banner3
        },
        {
            img: banner4
        },
        {
            img: banner5
        },
        {
            img: banner6
        },
        {
            img: banner7
        },
        {
            img: banner8
        },
        {
            img: banner9
        },
        {
            img: banner10
        },
    ]

    const thumbnailImages = [
        {
            img: thumb01

        },
        {
            img: thumb02

        },
        {
            img: thumb03

        },
        {
            img: thumb04

        },
        {
            img: thumb05

        },
        {
            img: thumb06

        },
        {
            img: thumb07

        },
        {
            img: thumb08

        },
        {
            img: thumb09

        },
        {
            img: thumb010

        },
        {
            img: thumb011

        },
        {
            img: thumb012

        },
    ]
    return (
        <div className='my-5'>
            <h1 className="text-center my-5">Banners</h1>
            <hr />
            <WSPGallery
                galleryImages={galleryImages}
            />

            <h1 className='text-center my-5' >Thumbnails</h1>
            <hr />
            <WSPGallery galleryImages={thumbnailImages} />
        </div>
    )
}
