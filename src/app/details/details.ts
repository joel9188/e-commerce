import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  id : any=0;
  product: any;
  constructor(private api: ApiService, private cdr: ChangeDetectorRef,private route: ActivatedRoute) { }
ngOnInit() {
this.id=this.route.snapshot.paramMap.get('id');
this.api.getProductDetails(this.id).subscribe((data:any) => {
  this.product = data;
  this.cdr.detectChanges();});
}
}
