import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import Swiper from 'swiper';

interface MorePlace {
  title: string;
  subtitle: string;
  intro: string;
  images: string[];
  spots: string[];
  open: boolean;
}
@Component({
  selector: 'app-nearby-places',
  imports: [CommonModule],
  templateUrl: './nearby-places.component.html',
  styleUrls: ['./nearby-places.component.scss']
})
export class NearbyPlacesComponent implements OnDestroy {
  // Sample data for the nearby places
  places = [
    {
      name: 'Garkon Monastery',
      image: 'assets/r2.webp',  // Replace with your actual image path
      description: 'Garkon Aryan Valley Monastery: A Spiritual Haven in Ladakh',
      detailedDescription: `The Garkon Aryan Valley Monastery, nestled in the stunning Garkon Aryan Valley of Ladakh, is a significant spiritual site for the local Aryan community. Known for its serene atmosphere and traditional Buddhist architecture, the monastery offers a peaceful retreat for meditation and prayer. The Aryan people, believed to be descendants of ancient Indo-European tribes, maintain a unique cultural heritage here, blending Buddhist and Aryan traditions. The monastery, surrounded by the valley's lush landscapes, serves as both a spiritual center and a cultural landmark, attracting visitors seeking tranquility and insight into the region's rich history.`,
      gallery: [
        'assets/r2.webp', 'assets/s2.jpeg', 'assets/s3.jpeg'
      ],
      mapLocation: { lat: 34.5547, lng: 76.3511 }
    },
    {
      name: 'Garkon Waterfall',
      image: 'assets/s2.jpeg',  // Replace with your actual image path
      description: 'The Waterwall of Garkon: A Vital Lifeline',
      detailedDescription: `The Waterwall in Garkon, Aryan Valley, is an impressive traditional water management structure designed to channel snowmelt and rainwater for irrigation. Built by the local Aryan people, it ensures the fertility of the region’s lands, supporting agriculture in Ladakh’s harsh climate. Crafted from stone and local materials, the Waterwall blends with the landscape, offering both practicality and beauty, and stands as a testament to the community's ingenuity.`,
      gallery: [
        'assets/s1.jpeg', 'assets/s5.jpeg', 'assets/s6.jpeg'
      ],
      mapLocation: { lat: 34.5565, lng: 76.3550 }
    },
    {
      name: 'Chakdor',
      image: 'assets/s3.jpeg',  // Replace with your actual image path
      description: 'Chakdor Statue of Garkon: A Symbol of Peace and Spirituality',
      detailedDescription: `The Chakdor Statue in Garkon, Aryan Valley, is a striking monument that represents the region's deep spiritual heritage. Standing tall against the valley’s backdrop, the statue depicts Chakdor, a symbol of peace and enlightenment in local Buddhist tradition. Crafted with meticulous care, it serves as a reminder of the valley's cultural values and spiritual significance. The statue not only attracts visitors with its grandeur but also offers a tranquil place for reflection, blending seamlessly with the serene beauty of the surrounding landscape.`,
      gallery: [
        'assets/s3.jpeg', 'assets/s7.jpeg', 'assets/s5.jpeg'
      ],
      mapLocation: { lat: 34.5552, lng: 76.3527 }
    },
    {
      name: 'Arya Nature Camp',
      image: 'assets/s3.jpeg',  // Replace with your actual image path
      description: 'Arya Nature Camp: Your Gateway to Tranquil Ladakhi Living',
      detailedDescription: `Arya Nature Camp is not just a place to stay but an experience that connects you with the natural beauty and cultural heritage of Ladakh. Whether you're seeking adventure or relaxation, this camp provides the perfect base to explore the Aryan Valley and its surroundings.`,
      gallery: [
        'assets/s3.jpeg', 'assets/s7.jpeg', 'assets/s5.jpeg'
      ],
      mapLocation: { lat: 34.5552, lng: 76.3527 }
    },
    {
      name: 'Sindu View',
      image: 'assets/s3.jpeg',  // Replace with your actual image path
      description: 'Sindhu Viewpoint: A Tranquil Escape in Garkon',
      detailedDescription: 'The Sindhu Viewpoint in Garkon, Aryan Valley, offers a serene and picturesque setting along the banks of the Indus River. This tranquil spot provides panoramic views of the surrounding landscapes, making it an ideal location for relaxation and reflection. Visitors can enjoy the natural beauty of the area, with opportunities for photography and peaceful contemplation.',
      gallery: [
        'assets/s3.jpeg', 'assets/s7.jpeg', 'assets/s5.jpeg'
      ],
      mapLocation: { lat: 34.5552, lng: 76.3527 }
    }
  ];

  currentIndex = 0;
  audioPlaying = false;
  audio = new Audio('assets/flock.mp3');

  constructor() {
    window.scrollTo(0, 0);
    this.audio.loop = true;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.places.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.places.length) % this.places.length;
  }

  toggleMusic() {
    this.audioPlaying ? this.audio.pause() : this.audio.play();
    this.audioPlaying = !this.audioPlaying;
  }

  zoom = 14;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    disableDefaultUI: false,
    zoomControl: true
  };




  morePlaces: MorePlace[] = [
    {
      title: 'Biama Village',
      subtitle: 'Land of Apricots',
      intro: 'Biama is a quiet Aryan village with beautiful apricot orchards...',
      images: ['assets/b2.jpg', 'assets/b3.jpg', 'assets/b1.webp'],
      spots: ['Apricot Garden', 'Traditional Homes', 'Local Spring'],
      open: false
    },
    {
      title: 'Dha Village',
      subtitle: 'Cultural Jewel',
      intro: 'Dha is home to the Brokpa tribe, preserving ancient traditions...',
      images: ['assets/d1.jpg', 'assets/d2.jpg', 'assets/d3.jpg'],
      spots: ['Brokpa Cultural House', 'Monastery Hill', 'Sindhu River Bank'],
      open: false
    },
    {
      title: 'Darchik Village',
      subtitle: 'Gateway to Garkone',
      intro: 'Darchik is a charming village on the edge of Aryan Valley...',
      images: ['assets/r1.webp', 'assets/r2.webp', 'assets/r3.jpeg'],
      spots: ['Chorten View', 'Wooden Bridges', 'Sunset Cliff'],
      open: false
    }
  ];

  toggleSection(index: number) {
    this.morePlaces[index].open = !this.morePlaces[index].open;
  }
  ngOnDestroy() {
    if (this.audioPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
