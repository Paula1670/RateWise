import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessHeaderComponent } from './BusinessHeader.component';


describe('NftHeaderComponent', () => {
  let component: BusinessHeaderComponent;
  let fixture: ComponentFixture<BusinessHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BusinessHeaderComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
