import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NasaImage, NasaService } from '../services/nasa.service';
 
@Component({
  selector: 'image-container',
  templateUrl: './imageContainer.component.html',
  styleUrls: ['./imageContainer.component.css']
})
export class ImageContainer {
 
  constructor(private _nasaService: NasaService) { }

  images: NasaImage[] | undefined;
  isLoading: boolean = true;
  start_date: Date = new Date();

  ngOnInit() {
    this.getData();
  }
 
  // popular images with data from NASA API
  getData() {
    this.isLoading = true;
    this.images = [];
    this._nasaService.getImages(this.start_date).subscribe((data: NasaImage[]) => {
        this.isLoading = false;
        this.images = data;
    });
  }

  likeImage(image: NasaImage) {
      image.isLiked = !image.isLiked;
  }  
}