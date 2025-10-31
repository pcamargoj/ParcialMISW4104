import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { VehicleModule } from '../vehicle.module';
import { VehicleListComponent } from './vehicle-list.component';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let vehicleService: VehicleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, VehicleModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    vehicleService = TestBed.inject(VehicleService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
