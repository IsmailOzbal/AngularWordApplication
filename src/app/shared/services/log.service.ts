import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private toastr: ToastrService) { }

  public log(message: string) {
    this.toastr.error(message);
  }
}
