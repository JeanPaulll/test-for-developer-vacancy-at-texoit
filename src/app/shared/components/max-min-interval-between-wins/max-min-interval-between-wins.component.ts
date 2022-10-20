import {Component, HostBinding, OnInit} from '@angular/core';
import {GenericService, IParameters, Projection} from "../../services/generic.service";
import {MaxMin} from "../../models/max-min.model";

@Component({
  selector: 'app-max-min-interval-between-wins',
  templateUrl: './max-min-interval-between-wins.component.html',
  styleUrls: ['./max-min-interval-between-wins.component.scss']
})
export class MaxMinIntervalBetweenWinsComponent implements OnInit {

  public title = 'Produtores com maior e menor intervalo entre vitórias';
  public maxMin: { min: MaxMin[], max: MaxMin[] } = {
    min: [],
    max: []
  };
  @HostBinding('class') defaultClass = 'card';

  constructor(
      private readonly genericService: GenericService<{ min: MaxMin[], max: MaxMin[] }>
  ) {
  }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    const parameters: IParameters = {
      projection: Projection.MAX_MIN_WIN_INTERVAL_FOR_PRODUCERS
    };
    this.genericService.search(parameters).subscribe((response: { min: MaxMin[], max: MaxMin[] }) => {
      if (response) {
        this.maxMin = response
      }
    });
  }

}
