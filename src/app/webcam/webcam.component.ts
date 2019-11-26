import { Component, OnInit, ViewChild } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServerService } from '../server.service';




@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  @ViewChild('f', {static: false}) mainForm: NgForm;
  customer: Customer = new Customer();
  submitted = false;
 
  constructor(private serverService: ServerService, private router: Router, private authService: AuthService, private customerService: CustomerService) { }
 
  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }
 
  save() {
    this.customerService.createCustomer(this.customer);
    this.customer = new Customer();
  }
 
  onSubmit() {
    console.log(this.mainForm);
 /*   this.customer.firstname = this.mainForm.controls['firstname'].value;
    this.customer.firstname = this.mainForm.controls['lastname'].value;
    this.customer.firstname = this.mainForm.controls['firstname'].value;
    this.customer.firstname = this.mainForm.controls['firstname'].value;
    this.customer.firstname = this.mainForm.controls['firstname'].value; */
    this.router.navigate(['/bcard']);
    this.submitted = true;
    this.save();
  }  

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public test42;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // URL for Google CloudVision - Key kept in environment.ts
  public url = "https://vision.googleapis.com/v1/images:annotate?key=${environment.cloudVision}"

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.customer.imagebase64 = this.webcamImage.imageAsBase64;
    var test42 = this.serverService.getTextFromImage(this.customer.imagebase64);
    
    console.log(test42);
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
}
