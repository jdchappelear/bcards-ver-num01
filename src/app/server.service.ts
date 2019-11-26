import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    public url = "https://vision.googleapis.com/v1/images:annotate?key=${environment.cloudVision}";

    public mybase64: string = null;

        
    

    getTextFromImage(mybase64: string) {
        console.log("Attempting to get Text from Image");
        var postHead: string = "{'requests':[{'image':{'content': " + mybase64 + "},'features':[{'type':'TEXT_DETECTION'}]}]}";    


        return this.http.post('https://bcards-ver-num01.firebaseio.com/data.json', postHead);
    }
}