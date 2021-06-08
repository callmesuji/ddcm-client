import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FileUploadService } from '../file-upload-service/file-upload.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef | any;
  fileAttr = 'Choose File';
  shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: string = ''; 
    
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }
// On file Select
onChange(event : any) {
  

  this.file = event.target.files[0];
}

onUpload() {
  this.loading = !this.loading;
  console.log(this.file);
  this.fileUploadService.upload(this.file).subscribe(
    (event: any) => {
        if (typeof (event) === 'object') {

            // Short link via api response
            this.shortLink = event.link;

            this.loading = false; // Flag variable 
        }
    }
);
}

uploadFileEvt(imgFile: any) {
  if (imgFile.target.files && imgFile.target.files[0]) {
    this.fileAttr = '';
    Array.from(imgFile.target.files).forEach((file: any) => {
      this.fileAttr += file.name + ' - ';
    });

    // HTML5 FileReader API
    let reader = new FileReader();
    reader.onload = (e: any) => {
      let image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        let imgBase64Path = e.target.result;
      };
    };
    reader.readAsDataURL(imgFile.target.files[0]);
    
    // Reset if duplicate image uploaded again
    this.fileInput.nativeElement.value = "";
  } else {
    this.fileAttr = 'Choose File';
  }
}



}
