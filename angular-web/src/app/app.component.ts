import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-web';
  veiculos;
  @ViewChild('putId') putId:ElementRef;
  @ViewChild('putPlaca') putPlaca:ElementRef;
  @ViewChild('putChassi') putChassi:ElementRef;
  @ViewChild('putRenavam') putRenavam:ElementRef;
  @ViewChild('putModelo') putModelo:ElementRef;
  @ViewChild('putMarca') putMarca:ElementRef;
  @ViewChild('putAno') putAno:ElementRef;

  @ViewChild('postPlaca') postPlaca:ElementRef;
  @ViewChild('postChassi') postChassi:ElementRef;
  @ViewChild('postRenavam') postRenavam:ElementRef;
  @ViewChild('postModelo') postModelo:ElementRef;
  @ViewChild('postMarca') postMarca:ElementRef;
  @ViewChild('postAno') postAno:ElementRef;

  @ViewChild('deleteId') deleteId:ElementRef;

  constructor(private http:HttpClient){
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");

    
  }
  
  ngOnInit(){
    this.http.get<any>('http://localhost:3100/veiculos',{
  
    }).subscribe(
      (val) => {          
        this.veiculos=val
      },
      response => {
       
      },
      () => {
       
      });
      
  }
  httpGetFunction() {
    this.http.get<any>('http://localhost:3100/veiculos',{
      
    }).subscribe(
      (val) => {          
        this.veiculos=val
      },
      response => {
          
      },
      () => {
         
      });
    
    
    }
httpPutFunction() {
  const id = parseInt(this.putId.nativeElement.value)
  const placa = this.putPlaca.nativeElement.value
  const chassi = this.putChassi.nativeElement.value
  const renavam = this.putRenavam.nativeElement.value
  const modelo = this.putModelo.nativeElement.value
  const marca = this.putMarca.nativeElement.value
  const ano = parseInt(this.putAno.nativeElement.value)   

  this.http.put<any>('http://localhost:3100/veiculos',{  
    id:id,
    placa:placa,
    chassi:chassi,
    renavam:renavam, 
    modelo:modelo, 
    marca:marca, 
    ano:ano
  }).subscribe(
    (val) => {    
    },
    response => {       
      this.httpGetFunction()
    },
    () => {       
      this.httpGetFunction()
    });

 
}

httpDeleteFunction() {
  const id = parseInt(this.deleteId.nativeElement.value)
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: {
      id: id,      
    },
  };

  this.http.delete<any>('http://localhost:3100/veiculos',options
    
  ).subscribe(
    (val) => {     
    },
    response => {     
      this.httpGetFunction()
    },
    () => {        
      this.httpGetFunction()        
    });
    
    
}
  httpPostFunction() {    
    const placa = this.postPlaca.nativeElement.value
    const chassi = this.postChassi.nativeElement.value
    const renavam = this.postRenavam.nativeElement.value
    const modelo = this.postModelo.nativeElement.value
    const marca = this.postMarca.nativeElement.value
    const ano = parseInt(this.postAno.nativeElement.value)

    this.http.post<any>('http://localhost:3100/veiculos',{  
      placa:placa,
      chassi:chassi,
      renavam:renavam, 
      modelo:modelo, 
      marca:marca, 
      ano:ano
    }).subscribe(
      (val) => {        
      },
      response => {         
        this.httpGetFunction()
      },
      () => {          
        this.httpGetFunction()
      });
      
  }
  }