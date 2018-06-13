import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaImagenComponent } from './pelicula-imagen.component';

describe('PeliculaImagenComponent', () => {
  let component: PeliculaImagenComponent;
  let fixture: ComponentFixture<PeliculaImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
