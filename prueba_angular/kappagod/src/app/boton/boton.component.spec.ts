import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:prueba_angular/kappagod/src/app/home/home.component.spec.ts
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
=======
import { BotonComponent } from './boton.component';

describe('BotonComponent', () => {
  let component: BotonComponent;
  let fixture: ComponentFixture<BotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonComponent ]
>>>>>>> f3149a07 (añadido boton funcional para imprimir en el HTML los usuarios creados anteriormente en el backend):prueba_angular/kappagod/src/app/boton/boton.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:prueba_angular/kappagod/src/app/home/home.component.spec.ts
    fixture = TestBed.createComponent(HomeComponent);
=======
    fixture = TestBed.createComponent(BotonComponent);
>>>>>>> f3149a07 (añadido boton funcional para imprimir en el HTML los usuarios creados anteriormente en el backend):prueba_angular/kappagod/src/app/boton/boton.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
