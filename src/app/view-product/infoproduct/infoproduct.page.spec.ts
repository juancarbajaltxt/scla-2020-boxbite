import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoproductPage } from './infoproduct.page';

describe('InfoproductPage', () => {
  let component: InfoproductPage;
  let fixture: ComponentFixture<InfoproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
