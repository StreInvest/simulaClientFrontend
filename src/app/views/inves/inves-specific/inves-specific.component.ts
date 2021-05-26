import { Component, OnInit } from '@angular/core';
import { PostagemService } from 'src/app/services/postagem.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import FormateDateBr from '../../../funcoes/formateDateBr';

@Component({
  selector: 'app-inves-specific',
  templateUrl: './inves-specific.component.html',
  styleUrls: ['./inves-specific.component.css']
})
export class InvesSpecificComponent implements OnInit {

  dia = '';
  mes = '';
  ano = '';
  minimo = '';
  rate = '';
  dataBr = '';
  invest = '';
  cat = '';
  consu = '';
  risco = '';
  status = '';

  public userId = '';

  isLoading = false;

  constructor(private api: PostagemService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.userId = params.id);
  }

  ngOnInit(): void {
    this.listarEspecifico(this.userId);
  }

  // tslint:disable-next-line: typedef
  listarEspecifico(userId: string){
    this.isLoading = true;
    this.api.listarEspecifico(userId).subscribe((data: any) => {
      this.dia = data.response.profitability.day;
      this.mes = data.response.profitability.month;
      this.ano = data.response.profitability.year;
      this.minimo = data.response.profitability.minimum_value;
      this.rate = data.response.profitability.score;
      this.dataBr = FormateDateBr(data.response.updated_at);
      this.invest =  data.response.investment_name;
      this.cat =  data.response.category;
      this.consu = data.response.consortium.consortium_name;
      this.risco = data.response.risk;
      this.status = data.response.status;
      this.isLoading = false;
    }, (error) => {
      this.api.show('Error, dados não encontrado!');
    });
  }

}
