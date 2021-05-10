import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemVisualizarComponent } from './postagem-visualizar.component';

describe('PostagemVisualizarComponent', () => {
  let component: PostagemVisualizarComponent;
  let fixture: ComponentFixture<PostagemVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
